import ProcessPage from "./_components/desigen";
import Explore from "./_components/Explore";
import Hero1 from "./_components/Hero1";
import ServicesPage from "./_components/service";
import Why from "./_components/whymetalogic";

 const HomePage = () => {
     return (
         <>
             <Hero1/>
             <ProcessPage/>
             <Why/>
             <Explore/>
             <ServicesPage/>
            
         </>
     );
 };
 
 export default HomePage;