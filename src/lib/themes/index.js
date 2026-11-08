const blockColors = {
    motion: {
        primary: '#0284C7',
        secondary: '#0369A1',
        tertiary: '#075985',
        quaternary: '#0369A1'
    },
    looks: {
        primary: '#7C3AED',
        secondary: '#6D28D9',
        tertiary: '#5B21B6',
        quaternary: '#6D28D9'
    },
    sounds: {
        primary: '#DB2777',
        secondary: '#BE185D',
        tertiary: '#9D174D',
        quaternary: '#BE185D'
    },
    control: {
        primary: '#F59E0B',
        secondary: '#D97706',
        tertiary: '#B45309',
        quaternary: '#D97706'
    },
    event: {
        primary: '#EAB308',
        secondary: '#CA8A04',
        tertiary: '#A16207',
        quaternary: '#CA8A04'
    },
    sensing: {
        primary: '#0891B2',
        secondary: '#0E7490',
        tertiary: '#155E75',
        quaternary: '#0E7490'
    },
    pen: {
        primary: '#0D9488',
        secondary: '#0F766E',
        tertiary: '#115E59',
        quaternary: '#0F766E'
    },
    operators: {
        primary: '#10B981',
        secondary: '#059669',
        tertiary: '#047857',
        quaternary: '#059669'
    },
    data: {
        primary: '#F97316',
        secondary: '#EA580C',
        tertiary: '#C2410C',
        quaternary: '#EA580C'
    },
    // This is not a new category, but rather for differentiation
    // between lists and scalar variables.
    data_lists: {
        primary: '#EA580C',
        secondary: '#C2410C',
        tertiary: '#9A3412',
        quaternary: '#C2410C'
    },
    more: {
        primary: '#F43F5E',
        secondary: '#E11D48',
        tertiary: '#BE123C',
        quaternary: '#E11D48'
    },
    text: '#FFFFFF',
    workspace: '#F0FDFA',
    toolboxHover: '#0D9488',
    toolboxSelected: '#E6FFFA',
    toolboxText: '#1E293B',
    toolbox: '#FFFFFF',
    flyout: '#F8FAFC',
    scrollbar: '#99F6E4',
    scrollbarHover: '#0D9488',
    textField: '#FFFFFF',
    textFieldText: '#1E293B',
    insertionMarker: '#0D9488',
    insertionMarkerOpacity: 0.25,
    dragShadowOpacity: 0.6,
    stackGlow: '#38BDF8',
    stackGlowSize: 4,
    stackGlowOpacity: 1,
    replacementGlow: '#FFFFFF',
    replacementGlowSize: 2,
    replacementGlowOpacity: 1,
    colourPickerStroke: '#FFFFFF',
    // CSS colours: support RGBA
    fieldShadow: 'rgba(30, 41, 59, 0.15)',
    dropDownShadow: 'rgba(30, 41, 59, 0.25)',
    numPadBackground: '#0D9488',
    numPadBorder: '#0F766E',
    numPadActiveBackground: '#0F766E',
    numPadText: 'white', // Do not use hex here, it cannot be inlined with data-uri SVG
    valueReportBackground: '#FFFFFF',
    valueReportBorder: '#99F6E4',
    valueReportForeground: '#1E293B',
    menuHover: 'rgba(13, 148, 136, 0.2)'
};

const extensions = {};

export {
    blockColors,
    extensions
};
