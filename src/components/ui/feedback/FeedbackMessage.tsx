interface FeedbackMessageProps {
  type: "error" | "success";
  message: string;
}
const FeedbackMessage = ({ type, message }: FeedbackMessageProps) => {
  const isError = type === "error";

  return (
    <div className="text-center py-4 lg:px-4">
      <div
        className={`
          p-2 rounded-3xl items-center leading-none
          lg:rounded-full flex lg:inline-flex
          ${
            isError
              ? "bg-red-800 text-indigo-100"
              : "bg-green-800 text-green-100"
          }
        `}
        role={isError ? "alert" : "status"}
      >
        <span
          className={`
            flex rounded-full uppercase px-2 py-1
            text-xs font-bold mr-3
            ${isError ? "bg-red-500" : "bg-green-500"}
          `}
        >
          {isError ? "Error" : "Éxito"}
        </span>

        <span className="font-semibold mr-2 text-left flex-auto">
          {message}
        </span>
      </div>
    </div>
  );
};

export default FeedbackMessage
