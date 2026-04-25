// reate a "context" for the images
let imageContext = require.context(
  "../assets/projects/ui-ux-design",
  true,
  /\.(jpe?g|png|webp)$/i,
);

// helper function to find images by folder name
const getImagesByFolder = (folderName) => {
  return imageContext
    .keys()
    .filter((path) => path.includes(folderName))
    .map((path) => imageContext(path));
};

// export arrays using the folder names from the structure
export const ecommerceMobilePhonesImages = getImagesByFolder("01-phone-verse");
export const hospitalNetworkImages = getImagesByFolder("02-optima-medical");
export const findCafeImages = getImagesByFolder("08-find-coffee-shop");
export const shoeRevolutionImages = getImagesByFolder("04-shoe-revolution");
export const marketingAgencyImages = getImagesByFolder("05-marketing-agency");
export const beautySalonImages = getImagesByFolder("06-beauty-salon");
export const beautyProductsShop = getImagesByFolder("07-beauty-products");

// ------------------

imageContext = require.context(
  "../assets/projects/data-analysis",
  true,
  /\.(jpe?g|png|webp)$/i,
);

export const eurovision = getImagesByFolder("01-eurovision");
export const misteryShopper = getImagesByFolder("02-mystery-shopper");
export const ukEmploymentRate = getImagesByFolder("03-uk-employment-rate");
export const burdenOfDisease = getImagesByFolder("04-burden-of-disease");
export const hrDashboard = getImagesByFolder("05-hr-dashboard");
export const superstoreSales = getImagesByFolder("06-superstore-sales");
export const hollywoodProfitableFilms = getImagesByFolder(
  "07-hollywood-profitable-films",
);
export const earthQuakes = getImagesByFolder("08-earthquakes");
export const netflixMoviesAndShows = getImagesByFolder(
  "09-netflix-movies-and-shows",
);
