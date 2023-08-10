import HeaderIllustration from "../images/illustration-woman-online-mobile.svg";
import ShadowIllustrationMobile from "../images/bg-pattern-mobile.svg";
import HeaderIllustrationDesktop from "../images/illustration-woman-online-desktop.svg";
import ShadowIllustrationDesktop from "../images/bg-pattern-desktop.svg";
import Faq from "react-faq-component";

function FAQ() {
  const data = {
    rows: [
      {
        title: "How many team members can I invite?",
        content:
          "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      },
      {
        title: "What is the maximum file upload size?",
        content:
          "No more than 2GB. All files in your account must fit your allotted storage space.",
      },
      {
        title: "How do I reset my password?",
        content:
          "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      },
      {
        title: "Can I cancel my subscription?",
        content:
          "Yes! Send us a message and we’ll process your request no questions asked.",
      },
      {
        title: "Do you provide additional support?",
        content:
          "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      },
    ],
  };

  {
    /* ANIMATION AND STYLES */
  }
  const styles = {
    bgColor: "white",
    titleTextColor: "blue",
    rowTitleColor: "",
    rowContentColor: "grey",
    arrowColor: "#EB9809",
    rowTitleTextSize: "14px",
    rowContentTextSize: "14px",
    rowContentPaddingBottom: "1em",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };
  {
    /* ANIMATION AND STYLES */
  }
  return (
    <div className="flex flex-col items-center px-4 py-10 gap-10 pt-28 relative shadow-2xl max-w-[375px]  xl:flex-row xl:items-center xl:px-10 xl:py-20 xl:max-w-full xl:overflow-hidden">
      {/* POSITION IMAGES */}
      <div className="w-full flex flex-col items-center">
        <img
          className="absolute -top-[24%] w-[280px] xl:hidden"
          src={HeaderIllustration}
          alt="A girl who's watch a pc screen with a mailbox and some plants"
        />
        <img
          className="absolute -top-2 w-[280px] xl:hidden"
          src={ShadowIllustrationMobile}
          alt=""
        />
        <img
          className="w-1/2 absolute top-[3em] -left-[5em] hidden xl:flex"
          src={HeaderIllustrationDesktop}
          alt=""
        />

        <img
          className="absolute -top-[18em] -left-[33em] hidden xl:flex "
          src={ShadowIllustrationDesktop}
          alt=""
        />
      </div>
      {/* // POSITION IMAGES */}
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold xl:w-full">FAQ</h1>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
export default FAQ;
