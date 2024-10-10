export const truncateText = (text, maxLetters) => {
  if (text?.length > maxLetters) {
    return text?.slice(0, maxLetters) + "...";
  }
  return text;
};

// Function to convert duration (mm:ss) to total seconds
export const convertDurationToSeconds = (duration) => {
  const [minutes, seconds] = duration?.split(":")?.map(Number);
  return minutes * 60 + seconds;
};

export const convertToSlug = (str) => {
  return str
    .toString()
    .trim()
    ?.toLowerCase() // Convert to lowercase
    ?.replace(/\s+/g, "-") // Replace spaces with hyphens
    ?.replace(/[^\w\-]+/g, ""); // Remove all non-word chars
};

// Function to shuffle songs
export const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled?.length - 1; i > 0; i--) {
    const j = Math?.floor(Math?.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shareOnWhatsApp = (url) => {
  const encodedUrl = encodeURIComponent(url);
  const whatsappUrl = `whatsapp://send?text=${encodedUrl}`;
  window.location.href = whatsappUrl;
};

export const shareOnFacebook = (url) => {
  const encodedUrl = encodeURIComponent(url);
  const facebookAppUrl = `fb://facewebmodal/f?href=${encodedUrl}`;
  window.location.href = facebookAppUrl;
};

export const shareOnInstagram = (url) => {
  // Instagram does not have a direct share URL scheme, usually shares are done via mobile apps.
  alert(
    "Instagram does not support direct sharing from web. Use the app to share."
  );
};

export const shareOnTwitter = (url, text) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  const twitterAppUrl = `twitter://post?message=${encodedText}%20${encodedUrl}`;
  window.location.href = twitterAppUrl;
};

export function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc?.body?.textContent || "";
}

// Function to convert "MM:SS" format to total seconds
export const getTotalDuration = (userPlaylist) => {
  const totalSeconds = userPlaylist?.Info?.reduce((acc, item) => {
    const [minutes, seconds] = item?.duration.split(":").map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  const totalDuration = `${totalMinutes}mins ${remainingSeconds
    .toString()
    .padStart(2, "0")}secs`;

  return totalDuration;
};

export const formatTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
  const day = date.getDate(); // Get day of the month
  const year = date.getFullYear(); // Get full year

  // Define an array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month name from months array based on zero-indexed month value
  const monthName = months[date.getMonth()];

  // Function to add ordinal suffix to day (e.g., 1st, 2nd, 3rd, 4th, etc.)
  const addOrdinalSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  // Format the date string in "30th December, 2023" format
  const formattedDate = `${addOrdinalSuffix(day)} ${monthName}, ${year}`;

  return formattedDate;
};

// Function to Obscure Email Using Asterisks
export const obscureEmail = (emilString) => {
  var splitEmail = emilString?.split("@");
  var domain = splitEmail[1];
  var name = splitEmail[0];
  return name?.substring(0, 3)?.concat("****@")?.concat(domain);
};

export function addDaysToDate() {
  // to get today's date
  const newDate = new Date();
  // this adds 1day to the selected date or today's date
  const addNewDate = newDate?.setDate(newDate?.getDate() + 1);
  // converts the date to a format
  const minimumDateToAdd = new Date(addNewDate);
  console.log("minimumDateToAdd2", minimumDateToAdd);

  return minimumDateToAdd;
}

export const getVideoDuration = async (RNFS, videoUri) => {
  try {
    const metadata = await RNFS.stat(videoUri);
    const durationInSeconds = metadata.duration;
    console.log("durationInSeconds", durationInSeconds);
    return durationInSeconds;
  } catch (error) {
    console.error("Error getting video duration:", error);
    return 0;
  }
};

export function getYearFromDate(dateString) {
  const year = dateString?.split("-")[0];

  return year;
}

export function capitalizeFirstLetter(str) {
  // Check if the input is a valid string
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  // Capitalize the first letter and concatenate the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertUnixTimestampToDateString(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedDate = `${month} ${day
    .toString()
    .padStart(2, "0")}, ${year} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

  return formattedDate;
}

export const copyToClipboard = (Clipboard, text) => {
  Clipboard.setString(text);
};

// Function to check if the given artist ID matches the ID in the data
export function isUserFollowingArtist(artistIdToCheck, followedArtistArray) {
  // Iterate through the artistData array
  for (const artistEntry of followedArtistArray) {
    // Access the artist_id property in each entry
    const artistIdInData = artistEntry.artist_id;

    // Check if the provided artist ID matches the ID in the data
    if (artistIdInData === artistIdToCheck) {
      return true; // IDs match, the artist is following
    }
  }

  // If no match is found, return false
  return false;
}

// Function to check if the song is liked by the user matches the ID in the data
export function isSongLiked(songIdToCheck, userLikesArray) {
  // Iterate through the artistData array
  for (const songEntry of userLikesArray) {
    // Access the artist_id property in each entry
    const songIdInData = songEntry.music_id;

    // Check if the provided artist ID matches the ID in the data
    if (songIdInData === songIdToCheck) {
      return true; // IDs match, the artist is following
    }
  }

  // If no match is found, return false
  return false;
}

export function getFileExtension(filePath) {
  const segments = filePath?.split("/");
  const fileName = segments[segments.length - 1];
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex !== -1) {
    const fileFormat = fileName.slice(dotIndex + 1).toLowerCase();
    return fileFormat;
  }

  return ""; // Return an empty string if no file format found
}

export function extractPriceFromString(str) {
  // Use a regular expression to match the price pattern
  const match = str.match(/\$([\d.]+)/);

  // If a match is found, return the matched figure
  if (match && match[1]) {
    return parseFloat(match[1]);
  }

  // Return null if no match is found
  return null;
}

export const setPriceTo2DecimalPlaces = (price) => {
  const priceFigure = price?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return priceFigure;
};

export const removeHtmlTags = (htmlString) => {
  return htmlString.replace(/<[^>]+>/g, "");
};
