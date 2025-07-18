export const filtered = (studentsData, searchTerm, selectedClass) => {
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "all" ||
      student.class.toLowerCase() === selectedClass ||
      (student.group && student.group.toLowerCase() === selectedClass);

    return matchesSearch && matchesClass;
  });

  return filteredStudents;
};
