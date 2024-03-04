import PageContainer from "src/components/container/PageContainer";
import Navbar from "../home/Navbar";
import DashboardCard from "src/components/shared/DashboardCard";
import companyName from "src/utils/CompanyName";

const About = () => {
    return ( 
        <>
        
        <Navbar/>

        <PageContainer title={`About ${companyName}`}>

        <DashboardCard title={`About ${companyName}`}>
        <p>
        
Welcome to TetherBiz, your gateway to enhanced visibility and business growth. At TetherBiz, we specialize in providing a unique platform for companies to register and amplify their online presence.
<br/>
<br/>
About TetherBiz:
<br/>
<br/>

At TetherBiz, we understand the significance of a robust online presence in today's digital age. Our mission is to empower businesses by offering a streamlined registration process and unparalleled advertising opportunities. By registering with TetherBiz, companies gain access to a dedicated space on our website, where they can showcase their products, services, and brand story to a global audience.

<br/>
<br/>
Why Choose TetherBiz?
<br/>
<br/>

Effortless Registration: We've simplified the registration process, ensuring that companies can effortlessly join our platform and begin reaping the benefits of increased visibility.
<br/>
<br/>
Targeted Advertising: TetherBiz provides a tailored advertising space for each registered company, allowing them to reach their target audience effectively. Showcase your offerings to potential clients who are actively seeking products or services in your industry.
<br/>
<br/>
Global Exposure: Our platform transcends geographical boundaries, offering companies the opportunity to showcase their offerings to a diverse and global audience. Expand your reach and connect with potential clients worldwide.
<br/>
<br/>
Cost-Effective Marketing: TetherBiz offers cost-effective advertising solutions, making it accessible for businesses of all sizes to promote their brand. Maximize your marketing budget and enjoy a high return on investment.
<br/>
<br/>
Community Engagement: Join a thriving community of businesses on TetherBiz, fostering collaboration and networking opportunities. Connect with like-minded professionals, share insights, and explore potential partnerships.
<br/>
<br/>
At TetherBiz, we believe in the power of connectivity and collaboration. By choosing TetherBiz, you're not just registering your company; you're unlocking a world of opportunities to elevate your brand and propel your business to new heights. Join us today and let your business thrive in the digital realm!
        </p>
        </DashboardCard>



        </PageContainer>
        
        </>
     );
}
 
export default About;