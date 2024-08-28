"use client";
import { useGetHomeDataQuery } from "@/redux/api/api";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MobileCategory() {
  const { data: homeData, isLoading, isError, error } = useGetHomeDataQuery();
  const router = useRouter();
  const theme = useTheme();

  const handleCategory = (category) => {
    router.push(
      `/products/categories/${category?.id}/${encodeURIComponent(
        category?.name
      )}`
    );
  };

  const handleSubCategory = (singleSub) => {
    router.push(
      `/products/categories/${singleSub?.id}/${encodeURIComponent(
        singleSub?.name
      )}`
    );
  };

  return (
    <div className="mobile-top-navigation ">
      <FormControl
        sx={{
          m: 1,
          width: "95%",
          maxWidth: "95%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--primaryColor)", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "var(--primaryColor)", // Border color when hovering
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--primaryColor)", // Border color when focused
            },
          },
          "& label.Mui-focused": {
            color: "var(--primaryColor)", // Label color when focused
          },
        }}
      >
        <InputLabel id="demo-multiple-name-label">Select Category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={""}
          input={<OutlinedInput label="Select Category" />}
          MenuProps={MenuProps}
        >
          {homeData?.catagorylist?.map((category) => (
            <MenuItem
              key={category?.name}
              value={category?.name}
              onClick={() => handleCategory(category)}
            >
              {category?.name}
            </MenuItem>
          ))}
          {homeData?.catagorylist?.map((category) => (
            <>
              {category?.sub_category?.map((scategory) => (
                <MenuItem
                  key={scategory?.name}
                  value={scategory?.name}
                  onClick={() => handleSubCategory(scategory)}
                >
                  {scategory?.name}
                </MenuItem>
              ))}
            </>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
