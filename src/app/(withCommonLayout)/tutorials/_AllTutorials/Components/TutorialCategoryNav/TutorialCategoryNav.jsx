import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import styles from "./TutorialCategoryList.module.scss";
const TutorialCategoryNav = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);
  const getCategoriesData = async () => {
    const dataToDb = await fetch(`${backendUrl}/blog/get_all_category`);
    const result = await dataToDb.json();
    setCategories(result);
  };
  useEffect(() => {
    getCategoriesData();
  }, []);
// console.log(pathname);

  return (
    <div>
      <ul className={styles.categoryList}>
        {categories?.length > 0 &&
          categories?.map((category, idx) => (
            <li key={idx}>
              <Link
                href={`/${
                  pathname === "/tutorials" ? "tutorials" : "blogs"
                }/category/${category?.id}/${(category?.name).replace(
                  / /g,
                  "_"
                )}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {category?.name}
              </Link>{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TutorialCategoryNav;
