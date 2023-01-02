import dynamic from "next/dynamic";

const ContentEditor = dynamic(() => import("../ToastEditor/ContentLayout"), {
  ssr: false,
});

function ContentLayout() {
  return <ContentEditor></ContentEditor>;
}

export default ContentLayout;
