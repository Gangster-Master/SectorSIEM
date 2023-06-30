import {MultiSelect} from "react-multi-select-component";
import React from "react";
import {useTranslation} from "react-i18next";

const CustomMultiSelect = ({
                               options = [],
                               value = [],
                               onChange,
                               onMenuToggle,
                               isLoading = true,
                               hasSelectAll = false,
                           }: any) => {
    const {t} = useTranslation();
    return <MultiSelect
        value={value}
        onChange={onChange}
        onMenuToggle={onMenuToggle}
        labelledBy="Select"
        isLoading={!isLoading}
        options={options}
        hasSelectAll={hasSelectAll}
        overrideStrings={{
            allItemsAreSelected: t("All items are selected"),
            clearSearch: t("Clear Search"),
            clearSelected: t("Clear Selected"),
            noOptions: t("No options"),
            search: t("Search"),
            selectAll: t("Select All"),
            selectAllFiltered: t("Select All (Filtered)"),
            selectSomeItems: t("Select"),
            create: t("Create"),
        }}
        className=""
    />
}

export default CustomMultiSelect;
