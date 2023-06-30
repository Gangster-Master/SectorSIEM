import {MultiSelect} from "react-multi-select-component";
import React from "react";
import {useTranslation} from "react-i18next";
import {options} from "../../../components/Forms/AdvancedForms/data";
import Select from "react-select";

const CustomMultiSelect = ({
                               options = [],
                               value = '',
                               onChange,
                               onMenuToggle,
                               isLoading = true,
                               isSearchable = false,
                           }: any) => {
    const {t} = useTranslation();
    return <Select
        defaultValue={value}
        onChange={onChange}
        options={options}
        placeholder={t('Select')}
        classNamePrefix="selectform"
        isSearchable
    />
}

export default CustomMultiSelect;
