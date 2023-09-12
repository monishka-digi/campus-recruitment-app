export const homeFormSchema = (campusData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        Object.values(campusData)
          .filter((data) => typeof data !== "object")
          .filter(Boolean).length < 8
      ) {
        alert("Please fill inputs!!");
        reject("Please fill inputs!!");
      } else if (
        !(new Date().toISOString().split("T")[0] <= campusData.start_date)
      ) {
        alert("Please choose correct start_date date !!");
        reject("Please choose correct start_date date !!");
      } else if (
        !(new Date().toISOString().split("T")[0] <= campusData.end_date)
      ) {
        alert("Please choose correct end_date date !!");
        reject("Please choose correct end_date date !!");
      } else if (campusData.start_date > campusData.end_date) {
        alert("end_date Should be after start date !!");
        reject("end_date Should be after start date !!");
      } else if (campusData.test_duration % 5 !== 0) {
        alert("Test Duration should be multiples of 5 !!");
        reject("Test Duration should be multiples of 5 !!");
      } else if (
        Number(campusData.total_marks) <= Number(campusData.passing_marks)
      ) {
        alert("passing_marks should be lesser than total_marks !!");
        reject("passing_marks should be lesser than total_marks !!");
      } else if (campusData.tags.length < 1) {
        alert("Please Select at least one tag !!");
        reject("Please Select at least one tag !!");
      } else {
        resolve(true);
      }
    }, 2000);
  });
};