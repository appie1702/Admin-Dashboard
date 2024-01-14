import React from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>

          <option value="earphones">Earphones</option>

          <option value="smartwatch">SmartWatch</option>
        </select>
      </form>
    </div>
  );
};

export default AddProductPage;
