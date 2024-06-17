import Blogs from "./Blogs/Blogs";
import Events from "./EventsSection/Events";
import FirstSection from "./firstSection/FirstSection";
import Involvements from "./Involvement/Involvement";
import LivesAffected from "./LivesAffected/LivesAffected";
import Supporter from "./Supporter/Supporters";
import Testimonals from "./testtimonials/Testimonials";


export default function LandingPage() {
    return (
        <>
            <FirstSection/>
            <Events/>
            <Testimonals />
            <Involvements />
            <Blogs/>
            {/* <Supporter /> */}
            {/* <LivesAffected /> */}
        </>
    )
}