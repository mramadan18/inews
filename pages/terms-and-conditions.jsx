import baseUrl from "@/baseUrl";
import Condition from "@/components/Conditions/Condition";
import SubTitle from "@/components/Utilities/SubTitle";

const TermsAndConditions = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="p-4 bg-white">
          <SubTitle title="الشروط و الأحكام" color="#D30707" more={false} />

          <Condition
            title={data?.results[0]?.main_header}
            desc={data?.results[0]?.desc}
          />
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;

export async function getServerSideProps() {
  const { data } = await baseUrl.get("/settings/terms-conditions/");
  return { props: { data } };
}
