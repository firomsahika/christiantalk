export const theme = {
    colors: {
        // Core Palette
        primary: '#53d22d',       // Vibrant Green (for active elements, main buttons, highlights)
        primaryDark: '#4CAF38',    // A slightly darker shade of primary green, for subtle variations
        background: '#1C2B24',    // Dark Forest Green (main app background)
        cardBackground: '#2B3D33', // Slightly Lighter Dark Green (for cards, input fields)
        navBackground: '#122019',  // Even Darker Green (for bottom navigation bar)

        border: '#314037ff',


        // Text Colors
        textPrimary: '#FFFFFF',    // White (main text, titles)
        textSecondary: '#A6A6A6',  // Light Grey (subtitles, timestamps, inactive icons, placeholders)
        textAccent: '#6CC450',     // Vibrant Green (for interactive text, hashtags)

        // Status / Feedback (common additions)
        success: '#4CAF50',        // Standard green for success messages
        danger: '#F44336',         // Standard red for error messages
        warning: '#FFC107',        // Standard amber for warning messages
    },
    fonts: {
        // Standard font weight names for clarity
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extraBold: '800',
    },
    radius: {
        // Common border-radius values
        xs: 4,  // Smallest for subtle rounding
        sm: 8,  // Slightly more rounded, like for small buttons
        md: 12, // Medium, good for cards and larger buttons
        lg: 16, // Larger, for prominent elements
        xl: 20, // Extra large
        xxl: 24, // Very large, almost circular for avatars if width/height match
        circular: 999, // For perfectly circular elements like avatars/FABs
    }
};