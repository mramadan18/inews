import baseUrl from "@/baseUrl";
import Condition from "@/components/Conditions/Condition";
import SubTitle from "@/components/Utilities/SubTitle";

const PrivacyPolicy = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="p-4 bg-white">
          <SubTitle title="سياسة الخصوصية" color="#D30707" more={false} />

          <Condition
            title={data?.results[0]?.main_header}
            desc={data?.results[0]?.desc}
          />
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

export async function getServerSideProps() {
  const { data } = await baseUrl.get("/settings/privacy-policy/");

  return { props: { data } };
}
