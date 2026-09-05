
export interface User{
    id: string
    name: string,
    email: string,
    role: "owner" | "member";
}
// el id representa un campo UUID