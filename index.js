async function getSDGAPIData() {
    const url = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/Data";

    const params = new URLSearchParams({
        goal: "4",
        areaCode: "634",
        timePeriodStart: "2015",
        timePeriodEnd: "2024",
        page: "1",
        pageSize: "100"
    });

    try {
        const response = await fetch(`${url}?${params}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        return data;

    } catch (error) {
        console.error("Error fetching SDG data:", error);
    }
}

// document.addEventListener("DOMContentLoaded", getSDGAPIData);