
// prod management
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

// order management
import { ShoppingCart } from "@mui/icons-material";

// add category
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const dashboardData = [
    {
        name: "Order Management",
        icon: <ShoppingCart fontSize="small" />,
        link: "/order-management",
    },
    {
        name: "Products Management",
        icon: <ManageAccountsIcon fontSize="small" />,
        link: "/products-management",
    },
    {
        name: "Add Category",
        icon: <AddCircleOutlineIcon fontSize="small" />,
        link: "/add-category",
    },
    {
        name: "Add Brand",
        icon: <AddCircleOutlineIcon fontSize="small" />,
        link: "/add-brand",
    },
    {
        name: "Add Sub Category",
        icon: <AddCircleOutlineIcon fontSize="small" />,
        link: "/add-sub-category",
    },
    {
        name: "Add Product",
        icon: <AddCircleOutlineIcon fontSize="small" />,
        link: "/add-product",
    },
];