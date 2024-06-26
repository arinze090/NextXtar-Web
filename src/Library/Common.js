export const RNToast = (Toast, text2) => {
  Toast.show({
    type: "nextXtarToast",
    text2: text2,
  });
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

// export const inviteCelebsOnSocialMedia = (
//   Linking,
//   shouttyCelebUrl,
//   socialMediaUrl,
//   socialMediaType = 1
// ) => {
//   let socialMediaParameter = [];

//   const socialMediaContent =
//     "Hey pals! I've just joined NextXtar and would like to you listen to this track and share some love";

//   if (socialMediaType == 1) {
//     // for twitter
//     if (shouttyCelebUrl) {
//       socialMediaParameter.push("url=" + encodeURI(shouttyCelebUrl));
//     }
//     if (socialMediaContent) {
//       socialMediaParameter.push("text=" + encodeURI(socialMediaContent));
//     }
//   } else if (socialMediaType == 2) {
//     // for facebook
//     if (shouttyCelebUrl) {
//       socialMediaParameter.push("u=" + encodeURI(shouttyCelebUrl));
//     }
//     if (socialMediaContent) {
//       socialMediaParameter.push("quote=" + encodeURI(socialMediaContent));
//     }
//   } else if (socialMediaType == 3) {
//     // for whatsapp
//     if (shouttyCelebUrl) {
//       socialMediaParameter.push("send?" + encodeURI(shouttyCelebUrl));
//     }
//     if (socialMediaContent) {
//       socialMediaParameter.push("text=" + encodeURI(socialMediaContent));
//     }
//   } else {
//     null;
//   }

//   const fullSocialMediaUrl = socialMediaUrl + socialMediaParameter.join("&");

//   Linking.openURL(fullSocialMediaUrl)
//     .then((data) => {
//       console.log("shared");
//     })
//     .catch(() => {
//       console.log("Not shared");
//     });
// };

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
