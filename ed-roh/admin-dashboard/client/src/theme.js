export const tokensDark = {
    grey: {
        // Grey
        DEFAULT: "#666666",
        0: "#fff", // Manual
        10: "#f6f6f6", // Manual
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3D3D3D",
        800: "#292929",
        900: "#141414",
        950: "#0A0A0A",
        1000: "#000" // Manual
    },
    primary: {
        // Blue
        DEFAULT: "#21295C",
        50: "#F2F3FA",
        100: "#D4D8F0",
        200: "#98A1DA",
        300: "#5C6AC4",
        400: "#374498",
        500: "#21295C",
        600: "#1A2149",
        700: "#141836",
        800: "#0D1024",
        900: "#060811",
        950: "#030308"
    },
    secondary: {
        // Yellow
        DEFAULT: "#FFD166",
        50: "#FFFAF0",
        100: "#FFF6E0",
        200: "#FFECC2",
        300: "#FFE3A3",
        400: "#FFDA85",
        500: "#FFD166",
        600: "#FFBA1A",
        700: "#CC8F00",
        800: "#805A00",
        900: "#332400",
        950: "#0D0900"
    }
}

/*
  Functions reverseTokens tokensLight and themeSettings are from EdRoh
  not my code that's why so weird
 */

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {}
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val)
        const values = Object.values(val)
        const length = keys.length
        const reversedObj = {}
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1]
        }
        reversedTokens[key] = reversedObj
    })
    return reversedTokens
}
export const tokensLight = reverseTokens(tokensDark)

// mui theme settings
export const themeSettings = (mode) => ({
    palette: {
        mode: mode,
        ...(mode === "dark"
            ? {
                // palette values for dark mode
                primary: {
                    ...tokensDark.primary,
                    main: tokensDark.primary[400],
                    light: tokensDark.primary[400]
                },
                secondary: {
                    ...tokensDark.secondary,
                    main: tokensDark.secondary[300]
                },
                neutral: {
                    ...tokensDark.grey,
                    main: tokensDark.grey[500]
                },
                background: {
                    default: tokensDark.primary[600],
                    alt: tokensDark.primary[500]
                }
            }
            : {
                // palette values for light mode
                primary: {
                    ...tokensLight.primary,
                    main: tokensDark.grey[50],
                    light: tokensDark.grey[100]
                },
                secondary: {
                    ...tokensLight.secondary,
                    main: tokensDark.secondary[600],
                    light: tokensDark.secondary[700]
                },
                neutral: {
                    ...tokensLight.grey,
                    main: tokensDark.grey[500]
                },
                background: {
                    default: tokensDark.grey[0],
                    alt: tokensDark.grey[50]
                }
            })
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 40
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 16
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14
        }
    }
})
