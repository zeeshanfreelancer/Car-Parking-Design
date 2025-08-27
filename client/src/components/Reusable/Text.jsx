import React from "react";

const Text = ({ children, variant = "p", className = "", style = {} }) => {
    const variants = {
        h1: "text-4xl",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-medium",
        p: "text-base",
        small: "text-sm text-gray-600",
    };

    const Component = variant; // dynamic tag (h1, h2, p, etc.)

    return (
        <Component className={`${variants[variant]} ${className}`} style={style}>
            {children}
        </Component>
    );
};

export default Text;