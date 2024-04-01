import ProjectList from "@/components/ProjectList";

function DashboardPage() {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20">
        
          <ProjectList />
      
      </div>
    </main>
  );
}

export default DashboardPage;