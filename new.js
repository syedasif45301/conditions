function checkPermission(userRole, action) {
    // Define permissions for each role and action in an object
    const permissions = {
        admin: {
            create: true,
            read: true,
            update: true,
            delete: true,
        },

        user: {
            create: true,
            read: true,
            update: true,
            delete: false,
        },

        guest: {
            create: false,
            read: true,
            update: false,
            delete: false,
        },
};

// Check if the userRole and action combination is allowed
if (permissions[userRole] && permissions[userRole][action] !== undefined) {
if (permissions[userRole][action]) {
return "Permission granted.";
} else {
return "Permission denied.";
}
} else {
return "Invalid user role or action.";
}
}

// Example usage:
const userRole = "admin";
const action = "create";
console.log("userRole-->admin && action-->create");
const result = checkPermission(userRole, action);
console.log(result);  // Output: "Permission granted."


function calculateDiscountedPrice(productPrice) {
    if (productPrice >= 50) {
        // Apply a 10% discount
        const discountPercentage = 0.10;
        const discountedPrice = productPrice - (productPrice * discountPercentage);
        console.log("After discount:")
        return `Final price: $${discountedPrice.toFixed(2)}.`;
    } else {
        // No discount applied
        console.log("No discount applied:");
        return `Final price: $${productPrice.toFixed(2)}.`;
    }
}

// Example usage:
const productPrice = 55;
const result1 = calculateDiscountedPrice(productPrice);
console.log(result1);  // Output: "Final price: $54.00."