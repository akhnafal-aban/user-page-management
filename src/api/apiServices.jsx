const API_URL = 'https://gorest.co.in/public-api/users';
const API_KEY = 'REPLACE_WITH_GOREST_TOKEN';


// // Ini adalah fungsi untuk mengambil data dari API
// const getData = () => {
//   fetch("https://gorest.co.in/public/v2/users", {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer REPLACE_WITH_GOREST_TOKEN",
//       // Menentukan bahwa data yang dikirim dalam body permintaan adalah dalam format JSON. Ini penting agar server dapat memproses data dengan benar.
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error:", error))
// }

// // Ini adalah fungsi untuk mengirim data ke API
// const postData = () => {
//   const dataToSend = {
//     // Menambahkan 'User' agar tidak deprecated
//     name: nameUser,
//     email: emailUser,
//     gender: genderUser,
//     status: statusUser,
//   }

//   fetch("https://gorest.co.in/public/v2/users", {
//     method: "POST",
//     headers: {
//       Authorization:
//         "Bearer REPLACE_WITH_GOREST_TOKEN",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dataToSend)
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:" + error))
// }


// const deleteData = () => {
//     fetch("https://gorest.co.in/public/v2/users/{deleteId}", {
//       method: "DELETE",
//       headers: {
//         Authorization:
//           "Bearer REPLACE_WITH_GOREST_TOKEN",
//         // Menentukan bahwa data yang dikirim dalam body permintaan adalah dalam format JSON. Ini penting agar server dapat memproses data dengan benar.
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error("Error:", error))
//   }

// export { getData, postData, deleteData }

export const getData = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (name, email, gender, status) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({ name, email, gender, status })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};