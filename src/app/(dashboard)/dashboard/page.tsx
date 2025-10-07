
import getUserSesssion from "@/helpers/getUserSesssion";

const DashboardHomePage = async () => {
  const session = await getUserSesssion()
  console.log(session?.user?.id)
  return (
    <div className="flex flex-col justify-center items-center h-dvh w-full">
      <h1 className="text-4xl font-bold pb-2">Welcome {session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
