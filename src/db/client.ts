import { PrismaClient } from "../generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

/**
 * Extendemos el objeto global de Node.js para poder guardar una instancia
 * de PrismaClient y reutilizarla durante el desarrollo.
 *
 * Esto es especialmente útil en Next.js porque el hot reload puede volver a ejecutar los módulos varias veces mientras desarrollamos.
 *
 * Sin esta reutilización podrían crearse múltiples instancias de PrismaClient de forma innecesaria.
 */
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

/**
 * Adapter encargado de conectar Prisma Client con Neon PostgreSQL.
 *
 * DATABASE_URL contiene la connection string de Neon utilizada por la aplicación en runtime.
 */
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Instancia central de PrismaClient.
 *
 * Si ya existe una instancia almacenada en el objeto global,
 * se reutiliza.
 *
 * Si no existe, se crea una nueva utilizando el adapter de Neon.
 *
 * El operador ?? devuelve el valor de la izquierda si existe;
 * en caso contrario ejecuta la expresión de la derecha.
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

/**
 * Durante desarrollo guardamos PrismaClient en el objeto global.
 *
 * Esto permite que la instancia sobreviva a los hot reloads de Next.js
 * y evita crear nuevos PrismaClient cada vez que un módulo se recarga.
 *
 * En producción no necesitamos aplicar este patrón de la misma manera,
 * ya que no existe el hot reload propio del entorno de desarrollo.
 */
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}