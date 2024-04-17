import FilterComponent from "@/components/Projects/Enrollers";
import TableComponent from "@/components/project/TableData";


function ProjectsPage() {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20">
        
         <TableComponent/>
      
      </div>
    </main>
  );
}

export default ProjectsPage;