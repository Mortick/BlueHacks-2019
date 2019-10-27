export default function getAntiBodyValues (subject){

    let values = {
        name: "Antibody",
        expiration: "01/01/1999",
        labName: "Some Lab",
        quantity: "0ul",
        Price: "$0",
        info: " "
      }

    if (subject === "AntiBody A"){
        values.name = "Imunoglobulin A (IgA)";
        values.expiration = "12/30/2019";
        values.labName = "Stanford Research Lab";
        values.quantity = "25ul";
        values.price = "$125";
        values.info = "Low levels occur in some types of leukemia, kidney damage and problems with the intestines. High levels present with certain autoimmune disorders. ";

        return values;
    }

    else if (subject === "AntiBody B"){
        values.name = "Immunoglobulin G (IgG)";
        values.expiration = "08/30/2020";
        values.labName = "John Hopkins Research Lab";
        values.quantity = "5ul";
        values.price = "$225";

        return values;
    }

    else if (subject === "AntiBody C"){
        values.name = "Immunoglobulin M (IgM)";
        values.expiration = "05/30/2021";
        values.labName = "MIT Research Lab";
        values.quantity = "15ul";
        values.price = "$525";

        return values;
    }

    else if (subject === "AntiBody D"){
        values.name = "Immunoglobulin E (IgE)";
        values.expiration = "06/10/2020";
        values.labName = "University of PittsBurgh Research";
        values.quantity = "10ul";
        values.price = "$310";

        return values;
    }

    else if (subject === "AntiBody E"){
        values.name = "Immunoglobulin D (IgD)";
        values.expiration = "011/30/2024";
        values.labName = "Carnegie Mellon Research";
        values.quantity = "5ul";
        values.price = "$910";

        return values;
    }

    return values;


}
