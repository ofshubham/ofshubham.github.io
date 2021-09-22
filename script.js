let root = document.querySelector(':root');

let colorSchemes = [
    {
        backgroundPrimary: '#0a192f',
        lightBackgroundPrimary: '#112240',
        fontPrimary: '#a7b2d0',
        fontSecondary: '#64ffda',
    },
    {
        backgroundPrimary: '#ba192f',
        lightBackgroundPrimary: '#112540',
        fontPrimary: '#a7b2d0',
        fontSecondary: '#64f12a',
    },
    {
        backgroundPrimary: '#0a156f',
        lightBackgroundPrimary: '#162240',
        fontPrimary: '#a7d0d0',
        fontSecondary: '#68afda',
    },
    {
        backgroundPrimary: '#ab213f',
        lightBackgroundPrimary: '#114510',
        fontPrimary: '#a9b4d0',
        fontSecondary: '#94a12a',
    },
    {
        backgroundPrimary: '#ba115f',
        lightBackgroundPrimary: '#141240',
        fontPrimary: '#a8b3d0',
        fontSecondary: '#648ada',
    },
    {
        backgroundPrimary: '#dc354f',
        lightBackgroundPrimary: '#135540',
        fontPrimary: '#c7f2d0',
        fontSecondary: '#64b12b',
    }
]

const chooseColorSchemeRandomly = () => {
    min = 0
    max = 7
    return colorSchemes[Math.floor(Math.random() * ( max - min ) + min)]
}

const applyColorScheme = () => {
    let colorScheme = chooseColorSchemeRandomly();
    for(let p in colorScheme){
        root.style.setProperty('--'+p, colorScheme[p]);
    }
}

setInterval(applyColorScheme, 5000);