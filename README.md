
# 🏥 CareConnect – Doctor Appointment Booking System

**CareConnect** is a full-stack web application that simplifies the process of finding and booking appointments with doctors. It features role-based dashboards for **Admin**, **Doctor**, and **Patient**, making it an efficient and scalable healthcare platform.

---

## 🚀 Features

- 🔐 **Authentication & Authorization** (JWT-based)
- 🩺 **Doctor Listing & Filtering** by specialization
- 📅 **Appointment Booking & Management**
- 🧑‍⚕️ **Doctor Profile Pages** with availability status
- 🖼️ **Image Uploads** via Cloudinary
- 📂 **Role-Based Dashboards** (Admin, Doctor, Patient)
- 🔎 **Search & Related Doctor Suggestions**
- 📬 **Contact & Feedback System**
- 🌐 **Responsive UI** using Tailwind CSS

---

## 🛠️ Tech Stack

| Frontend       | Backend           | Database | Others                |
|----------------|-------------------|----------|------------------------|
| React.js       | Node.js + Express | MongoDB  | Axios, Cloudinary     |
| React Router   | JWT Auth          | Mongoose | Tailwind CSS          |
| React Context  | Nodemailer        |          |                        |

---

## 🖼️ Screenshots

> Add UI screenshots like:
```
![Home Page](screenshots/home.png)
![Doctor Profile](screenshots/doctor-profile.png)
```

---

## 📁 Folder Structure (MERN)

```
careconnect/
│
├── client/                # React frontend
│   ├── components/        
│   ├── pages/
│   └── context/
│
├── server/                # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/mohdsha-123/careconnect.git
cd careconnect
```

2. **Install dependencies**
```bash
cd server
npm install

cd ../client
npm install
```

3. **Configure Environment Variables**

Create `.env` files in both `client/` and `server/`:

### `server/.env`
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Start Development Servers**
```bash
# In /server
npm run dev

# In /client
npm run dev
```

---

## 📬 Contact

- 👤 **Mohd Shariq**
- 📧 [LinkedIn](https://www.linkedin.com/in/mohdshariq01/)
- 💻 [GitHub](https://github.com/mohdsha-123)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
