const Table = () => {
  return (
    <div className="border-bottom border-right bg-gray p-4">
      <div className="row">
        <div className="col-6 col-md-2 col-lg-1">
          <span>20 : 01</span>
        </div>
        <div className="col-6 col-md-2 col-lg-2">
          <span className="mt-3 mb-md-0">برنامج حبر سياسي</span>
        </div>
        <div className="col-12 col-md-3 col-lg-2">
          <span className="mt-3 mt-md-0 d-inline-block">
            السبت - الاثنين - الاربعاء
          </span>
        </div>
        <div className="col-12 col-md-5 col-lg-7">
          <p className="mt-3 mt-md-0">
            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور
            او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
