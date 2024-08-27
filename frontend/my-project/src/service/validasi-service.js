import authService from "./auth-service";
const validasiError = (data) => {
  const { name, username, password } = data;
  const errors = {};
  if (name.length < 4) {
    errors.name = "Name must be more than 4 characters.";
  }
  if (username.length < 4) {
    errors.username = "Username must be more than 4 characters.";
  }
  let hasSmall = false;
  let hasBig = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      hasSmall = true;
    } else if (charCode >= 65 && charCode <= 90) {
      hasBig = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  if (!hasSmall || !hasBig || !hasNumber || password.length < 8) {
    errors.password =
      "Password must be more than 8 characters, contain uppercase letters, lowercase letters, and numbers.";
  }
  return errors;
};

const formatToISO = (dateString) => {
  console.log("Original date string:", dateString); // Debugging line

  // Jika dateString kosong atau tidak ada, kembalikan null
  if (!dateString) {
    return null; // Atau gunakan "" jika lebih sesuai untuk kasus Anda
  }

  // Periksa apakah tanggal sudah dalam format yyyy-MM-dd
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (isoDateRegex.test(dateString)) {
    // Jika format sudah sesuai, kembalikan ISO format langsung
    return new Date(dateString).toISOString();
  }

  // Jika format tidak sesuai, coba mengonversi format dd-MM-yyyy
  const [day, month, year] = dateString.split("-");
  if (
    day &&
    month &&
    year &&
    day.length === 2 &&
    month.length === 2 &&
    year.length === 4
  ) {
    const formattedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
    if (isNaN(formattedDate.getTime())) {
      throw new Error("Invalid date value.");
    }
    return formattedDate.toISOString();
  }

  // Jika format tidak valid, lemparkan error
  throw new Error("Invalid date format. Expected yyyy-MM-dd or dd-MM-yyyy.");
};

export const handleCreateProject = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    url: formData.get("url"),
    startDate: formatToISO(formData.get("startDate")),
    endDate: formatToISO(formData.get("endDate")),
    image: formData.get("image"),
  };

  console.info(data);

  try {
    await authService.fetchCreateProject(data);
    window.location.href = "/project";
  } catch (error) {
    console.info(error);
  }
};

export const handleUpdateProject = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    url: formData.get("url"),
    startDate: formatToISO(formData.get("startDate")),
    endDate: formatToISO(formData.get("endDate")),
    image: formData.get("image"),
  };
  try {
    await authService.fetchUpdateProject(data.id, data);
    window.location.href = "/project";
  } catch (error) {
    console.info(error.response.data.errors);
  }
};

export default validasiError;
