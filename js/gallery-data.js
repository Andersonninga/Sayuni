const galleryData = [
  {
    "id": 1,
    "file": "IMG_2994.JPG",
    "path": "img/IMG_2994.JPG",
    "category": "classroom",
    "title": "Children in Classroom #1"
  },
  {
    "id": 2,
    "file": "IMG_2995.JPG",
    "path": "img/IMG_2995.JPG",
    "category": "activities",
    "title": "Interactive Learning Session #2"
  },
  {
    "id": 3,
    "file": "IMG_2996.JPGg",
    "path": "img/IMG_2996.JPGg",
    "category": "outreach",
    "title": "School Supplies Distribution #3"
  },
  {
    "id": 4,
    "file": "IMG_3002.JPG",
    "path": "img/IMG_3002.JPG",
    "category": "health",
    "title": "Health Checkup Program #4"
  },
  {
    "id": 5,
    "file": "IMG_3005.JPG",
    "path": "img/IMG_3005.JPG",
    "category": "volunteers",
    "title": "Community Outreach in Arusha #5"
  },
  {
    "id": 6,
    "file": "IMG_3007.JPG",
    "path": "img/IMG_3007.JPG",
    "category": "classroom",
    "title": "Early Childhood Education #6"
  },
  {
    "id": 7,
    "file": "IMG_3013.JPG",
    "path": "img/IMG_3013.JPG",
    "category": "activities",
    "title": "Volunteers Supporting Students #7"
  },
  {
    "id": 8,
    "file": "IMG_3015.JPG",
    "path": "img/IMG_3015.JPG",
    "category": "outreach",
    "title": "Nutrition & Meal Program #8"
  },
  {
    "id": 9,
    "file": "IMG_3018.JPG",
    "path": "img/IMG_3018.JPG",
    "category": "health",
    "title": "Outdoor Sports & Games #9"
  },
//   {
//     "id": 10,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.23.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.23.jpeg",
//     "category": "volunteers",
//     "title": "Creative Arts & Reading #10"
//   },
//   {
//     "id": 11,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.24 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.24 (1).jpeg",
//     "category": "classroom",
//     "title": "Teacher & Student Mentorship #11"
//   },
//   {
//     "id": 12,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.24 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.24 (2).jpeg",
//     "category": "activities",
//     "title": "Community Gathering #12"
//   },
//   {
//     "id": 13,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.24 (3).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.24 (3).jpeg",
//     "category": "outreach",
//     "title": "Children in Classroom #13"
//   },
//   {
//     "id": 14,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.24.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.24.jpeg",
//     "category": "health",
//     "title": "Interactive Learning Session #14"
//   },
//   {
//     "id": 15,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.25 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.25 (1).jpeg",
//     "category": "volunteers",
//     "title": "School Supplies Distribution #15"
//   },
//   {
//     "id": 16,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.25 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.25 (2).jpeg",
//     "category": "classroom",
//     "title": "Health Checkup Program #16"
//   },
//   {
//     "id": 17,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.25.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.25.jpeg",
//     "category": "activities",
//     "title": "Community Outreach in Arusha #17"
//   },
//   {
//     "id": 18,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.26 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.26 (1).jpeg",
//     "category": "outreach",
//     "title": "Early Childhood Education #18"
//   },
//   {
//     "id": 19,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.26 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.26 (2).jpeg",
//     "category": "health",
//     "title": "Volunteers Supporting Students #19"
//   },
//   {
//     "id": 20,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.26 (3).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.26 (3).jpeg",
//     "category": "volunteers",
//     "title": "Nutrition & Meal Program #20"
//   },
//   {
//     "id": 21,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.26.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.26.jpeg",
//     "category": "classroom",
//     "title": "Outdoor Sports & Games #21"
//   },
//   {
//     "id": 22,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.27 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.27 (1).jpeg",
//     "category": "activities",
//     "title": "Creative Arts & Reading #22"
//   },
//   {
//     "id": 23,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.27 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.27 (2).jpeg",
//     "category": "outreach",
//     "title": "Teacher & Student Mentorship #23"
//   },
//   {
//     "id": 24,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.27 (3).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.27 (3).jpeg",
//     "category": "health",
//     "title": "Community Gathering #24"
//   },
//   {
//     "id": 25,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.27.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.27.jpeg",
//     "category": "volunteers",
//     "title": "Children in Classroom #25"
//   },
//   {
//     "id": 26,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.28 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.28 (1).jpeg",
//     "category": "classroom",
//     "title": "Interactive Learning Session #26"
//   },
//   {
//     "id": 27,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.28 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.28 (2).jpeg",
//     "category": "activities",
//     "title": "School Supplies Distribution #27"
//   },
//   {
//     "id": 28,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.28.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.28.jpeg",
//     "category": "outreach",
//     "title": "Health Checkup Program #28"
//   },
//   {
//     "id": 29,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.29 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.29 (1).jpeg",
//     "category": "health",
//     "title": "Community Outreach in Arusha #29"
//   },
//   {
//     "id": 30,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.29 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.29 (2).jpeg",
//     "category": "volunteers",
//     "title": "Early Childhood Education #30"
//   },
//   {
//     "id": 31,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.29.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.29.jpeg",
//     "category": "classroom",
//     "title": "Volunteers Supporting Students #31"
//   },
//   {
//     "id": 32,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.30 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.30 (1).jpeg",
//     "category": "activities",
//     "title": "Nutrition & Meal Program #32"
//   },
//   {
//     "id": 33,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.30.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.30.jpeg",
//     "category": "outreach",
//     "title": "Outdoor Sports & Games #33"
//   },
//   {
//     "id": 34,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.31.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.31.jpeg",
//     "category": "health",
//     "title": "Creative Arts & Reading #34"
//   },
//   {
//     "id": 35,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.32.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.32.jpeg",
//     "category": "volunteers",
//     "title": "Teacher & Student Mentorship #35"
//   },
//   {
//     "id": 36,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.33 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.33 (1).jpeg",
//     "category": "classroom",
//     "title": "Community Gathering #36"
//   },
//   {
//     "id": 37,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.33.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.33.jpeg",
//     "category": "activities",
//     "title": "Children in Classroom #37"
//   },
//   {
//     "id": 38,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.34 (1).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.34 (1).jpeg",
//     "category": "outreach",
//     "title": "Interactive Learning Session #38"
//   },
//   {
//     "id": 39,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.34 (2).jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.34 (2).jpeg",
//     "category": "health",
//     "title": "School Supplies Distribution #39"
//   },
//   {
//     "id": 40,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.34.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.34.jpeg",
//     "category": "volunteers",
//     "title": "Health Checkup Program #40"
//   },
//   {
//     "id": 41,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.35.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.35.jpeg",
//     "category": "classroom",
//     "title": "Community Outreach in Arusha #41"
//   },
//   {
//     "id": 42,
//     "file": "WhatsApp Image 2026-08-05 at 21.30.36.jpeg",
//     "path": "img/WhatsApp Image 2026-08-05 at 21.30.36.jpeg",
//     "category": "activities",
//     "title": "Early Childhood Education #42"
//   }
];
