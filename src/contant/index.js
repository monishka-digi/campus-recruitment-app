export const details = [
  {
    title: "Campus Name",
    className: " text-sm w-96 px-3 py-2 mb-3 bg-gray-100 rounded-md",
  },
  {
    title: "Title",
    className: "text-sm w-96 px-3 py-2 mb-3 bg-gray-100 rounded-md ",
  },
  {
    title: "Description",
    className: "text-sm w-96 px-3 py-2 mb-3 bg-gray-100 rounded-md ",
  },
  {
    title: "Start Date",
    type: "date",
    className: "text-sm w-auto mr-1 px-3 py-2 mb-3 bg-gray-100 rounded-md",
    display: "inline-block",
    min: new Date().toISOString().split("T")[0],
  },
  {
    title: "End Date",
    type: "date",
    className: "text-sm w-auto mr-1 px-3 py-2 mb-3 bg-gray-100 rounded-md",
    display: "inline-block",
    min: new Date().toISOString().split("T")[0],
  },
  {
    title: "Test Duration",
    type: "number",
    className: "text-sm w-20 px-3 py-2  mb-3 bg-gray-100 rounded-md",
    display: "inline-block",
  },
  {
    title: "Total Marks",
    type: "number",
    className: "text-sm w-30 mr-4 px-3 py-2 mb-3 bg-gray-100 rounded-md",
    display: "inline-block",
  },
  {
    title: "Passing Marks",
    type: "number",
    className: "text-sm w-30 px-3 py-2 mb-3 bg-gray-100 rounded-md",
    display: "inline-block",
  },
  {
    title: "Tags",
    options: [
      {
        cat: "next-js-13",
        key: "Next JS 13",
      },
      {
        cat: "javascript",
        key: "JavaScript",
      },
      {
        cat: "html",
        key: "HTML",
      },
      {
        cat: "css",
        key: "CSS",
      },
      {
        cat: "java",
        key: "Java",
      },
      {
        cat: "react-js",
        key: "React JS",
      },
      {
        cat: "typescript",
        key: "TypeScript",
      },
    ],

    isSelect: true,
    className: "text-sm w-30 px-3 py-2 bg-gray-100 rounded-md",
  },
];


export const initialCampusData = {
  campus_name: "",
  title: "",
  description: "",
  start_date: "",
  end_date: "",
  test_duration: "",
  total_marks: "",
  passing_marks: "",
  tags: [],
}