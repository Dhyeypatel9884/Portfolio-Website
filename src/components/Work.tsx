import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Sattys – Digital Commerce Platform",
    category: "Startup Product (UI/UX & Full Stack)",
    description: "Designed and developed a scalable B2B commerce platform for restaurants, cafés, bakeries, and hotels. Built a modern dashboard with inventory management, product catalog, order processing, authentication, and responsive user experience.",
    tools: "Figma, React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Cloudinary, Vercel, Git, GitHub",
    features: "Responsive Design, Authentication, Admin Dashboard, Product Management, Category Management, Bulk Upload, Image Optimization, Search & Filters, Order Management, Inventory Management, Cart System, Payment Integration, Mobile Responsive UI",
    image: "/images/sattys.png"
  },
  {
    title: "Sattys – Mobile Ordering Application",
    category: "Mobile Application Design & Development",
    description: "Designed and developed a premium mobile application enabling businesses to browse products, place bulk orders, manage carts, track deliveries, and complete secure digital payments with an intuitive user experience.",
    tools: "React Native, Expo, TypeScript, Figma, Supabase, MongoDB, Cloudinary, REST API, GitHub",
    features: "Authentication, Product Catalog, Wishlist, Shopping Cart, Order Tracking, Push Notifications, Search & Filters, Secure Payments, User Profiles, Delivery Status, Responsive UI, Performance Optimization",
    image: "/images/sattys_mobile.png"
  },
  {
    title: "MetaHuman Character Rigging & Animation",
    category: "3D Character Development",
    description: "Created realistic MetaHuman characters for interactive experiences with facial animation, character rigging, cinematic lighting, and real-time rendering workflows inside Unreal Engine.",
    tools: "Unreal Engine 5, MetaHuman Creator, Quixel Bridge, Blender, Mixamo, Adobe Substance Painter",
    features: "Facial Animation, Character Rigging, Skeletal Animation, Motion Capture Integration, Cinematic Lighting, Real-Time Rendering, Character Customization, Environment Integration",
    image: "/images/metahuman.png"
  },
  {
    title: "Blender Environment & Product Visualization",
    category: "3D Design & Rendering",
    description: "Developed high-quality 3D environments, stylized assets, and product visualizations with realistic materials, lighting, and optimized rendering techniques for digital presentations and interactive media.",
    tools: "Blender, Cycles, Eevee, Photoshop, HDRI Lighting, Substance Painter",
    features: "3D Modeling, UV Unwrapping, Texturing, Material Design, Lighting Setup, Product Rendering, Environment Design, Camera Animation, Optimization, High Resolution Rendering",
    image: "/images/blender_supra.png"
  },
  {
    title: "Pitstop Brand Identity & Creative Assets",
    category: "Graphic Design & Branding",
    description: "Designed branding assets, apparel graphics, marketing creatives, and digital promotional material with a strong focus on typography, visual identity, and premium aesthetics.",
    tools: "Adobe Illustrator, Adobe Photoshop, Adobe Lightroom, Figma",
    features: "Logo Design, Brand Identity, T-Shirt Design, Social Media Creatives, Print Design, Typography, Color System, Marketing Assets, Mockups, Visual Branding",
    image: "/images/pitstop.png"
  },
  {
    title: "Zeetalian Café Menu Design",
    category: "Restaurant Branding & Print Design",
    description: "Designed a premium restaurant menu that enhances customer experience through clean layouts, elegant typography, visual hierarchy, and modern branding suitable for both print and digital formats.",
    tools: "Adobe Illustrator, Adobe Photoshop, Figma, InDesign",
    features: "Menu Design, Typography, Print Layout, Visual Hierarchy, Brand Consistency, Food Photography Integration, Iconography, Color Palette, Digital Menu Design",
    image: "/images/zeetalian.png"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
