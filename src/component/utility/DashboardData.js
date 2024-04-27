
// prod management
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

// order management
import { ShoppingCart } from "@mui/icons-material";

// add category
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const dashboardData = [
    {
        name: "Order Management",
        icon: <ShoppingCart fontSize="small" color="info"/>,
        link: "/order-management",
    },
    {
        name: "Products Management",
        icon: <ManageAccountsIcon fontSize="small" color="info"/>,
        link: "/products-management",
    },
    {
        name: "Add Category",
        icon: <AddCircleOutlineIcon fontSize="small" color="info" />,
        link: "/add-category",
    },
    {
        name: "Add Brand",
        icon: <AddCircleOutlineIcon fontSize="small"color="info" />,
        link: "/add-brand",
    },
    {
        name: "Add Sub Category",
        icon: <AddCircleOutlineIcon fontSize="small"color="info" />,
        link: "/add-sub-category",
    },
    {
        name: "Add Product",
        icon: <AddCircleOutlineIcon fontSize="small" color="info"/>,
        link: "/add-product",
    },{
        name: "Add Coupon",
        icon: <AddCircleOutlineIcon fontSize="small" color="info"/>,
        link: "/add-coupon",
    },
];