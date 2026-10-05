import React, { useState } from "react";

function Practice() {
    const people = [
        {
            id: 1,
            firstName: "Saviour",
            lastName: "Ahiataku",
            age: 21,
            gender: "Male",
            status: "Active",
            bloodGroup: "O+"
        },
        {
            id: 2,
            firstName: "Ama",
            lastName: "Mensah",
            age: 19,
            gender: "Female",
            status: "Inactive",
            bloodGroup: "A+"
        },
        {
            id: 3,
            firstName: "Kwame",
            lastName: "Owusu",
            age: 25,
            gender: "Male",
            status: "Active",
            bloodGroup: "B+"
        },
        {
            id: 4,
            firstName: "Akosua",
            lastName: "Boateng",
            age: 30,
            gender: "Female",
            status: "Active",
            bloodGroup: "O-"
        },
        {
            id: 5,
            firstName: "Kofi",
            lastName: "Asante",
            age: 17,
            gender: "Male",
            status: "Inactive",
            bloodGroup: "AB+"
        },
        {
            id: 6,
            firstName: "Abena",
            lastName: "Osei",
            age: 24,
            gender: "Female",
            status: "Active",
            bloodGroup: "B-"
        },
        {
            id: 7,
            firstName: "Yaw",
            lastName: "Addo",
            age: 35,
            gender: "Male",
            status: "Active",
            bloodGroup: "O+"
        },
        {
            id: 8,
            firstName: "Adwoa",
            lastName: "Frimpong",
            age: 28,
            gender: "Female",
            status: "Inactive",
            bloodGroup: "A-"
        },
        {
            id: 9,
            firstName: "Kojo",
            lastName: "Amoah",
            age: 22,
            gender: "Male",
            status: "Active",
            bloodGroup: "A+"
        },
        {
            id: 10,
            firstName: "Esi",
            lastName: "Darko",
            age: 31,
            gender: "Female",
            status: "Active",
            bloodGroup: "O+"
        },
        {
            id: 11,
            firstName: "Daniel",
            lastName: "Mensah",
            age: 18,
            gender: "Male",
            status: "Inactive",
            bloodGroup: "B+"
        },
        {
            id: 12,
            firstName: "Akua",
            lastName: "Owusu",
            age: 26,
            gender: "Female",
            status: "Active",
            bloodGroup: "AB+"
        },
        {
            id: 13,
            firstName: "Michael",
            lastName: "Asare",
            age: 29,
            gender: "Male",
            status: "Active",
            bloodGroup: "O-"
        },
        {
            id: 14,
            firstName: "Efua",
            lastName: "Adjei",
            age: 20,
            gender: "Female",
            status: "Inactive",
            bloodGroup: "B+"
        },
        {
            id: 15,
            firstName: "Samuel",
            lastName: "Boateng",
            age: 33,
            gender: "Male",
            status: "Active",
            bloodGroup: "A+"
        },
        {
            id: 16,
            firstName: "Yaa",
            lastName: "Agyemang",
            age: 23,
            gender: "Female",
            status: "Active",
            bloodGroup: "A+"
        },
        {
            id: 17,
            firstName: "Emmanuel",
            lastName: "Kwarteng",
            age: 27,
            gender: "Male",
            status: "Inactive",
            bloodGroup: "AB+"
        },
        {
            id: 18,
            firstName: "Mavis",
            lastName: "Antwi",
            age: 32,
            gender: "Female",
            status: "Active",
            bloodGroup: "A-"
        },
        {
            id: 19,
            firstName: "Joseph",
            lastName: "Ofori",
            age: 24,
            gender: "Male",
            status: "Active",
            bloodGroup: "B-"
        },
        {
            id: 20,
            firstName: "Linda",
            lastName: "Asante",
            age: 21,
            gender: "Female",
            status: "Inactive",
            bloodGroup: "O-",
        }
    ];

    const [answers, setAnswers] = useState([])
    const [gg, setGG] = useState("all")
    const [ss, setSS] = useState("all")
    const [bb, setBB] = useState("all")
    const [tt, setTT] = useState("")


    function search() {
        const results = people.filter((p) => {
            return ((ss === "all" || p.status === ss) &&
                (gg === "all" || p.gender === gg) &&
                (bb === "all" || p.bloodGroup === bb)) && p.firstName.toLowerCase().includes(tt.toLowerCase())
        })

        setAnswers(results);
    }



    return (
        <div>
            <h1>Filter Practice</h1>
            <input type="text" value={tt} onChange={(e) => setTT(e.target.value)} />
            <br></br>
            <br></br>

            <select onChange={(e) => setGG(e.target.value)} value={gg}>
                <option value="all">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            {/* Status */}
            <select onChange={(e) => setSS(e.target.value)} value={ss}>
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            {/* Blood Group */}

            <select onChange={(e) => setBB(e.target.value)} value={bb}>
                <option value="all">All Blood Groups</option>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
            </select>
            <button onClick={search}>Filter</button>

            <div>
                {
                    answers.map((as) => (
                        (
                            <div key={as.id}>
                                <p></p>
                                <p>{as.firstName}</p>
                                <p>{as.lastName}</p>
                                <p>{as.age}</p>
                                <p>{as.gender}</p>
                                <p>{as.status}</p>
                                <p>{as.bloodGroup}</p>
                                <br></br>
                                <br></br>
                            </div>
                        )
                    ))
                }
            </div>

        </div>
    );
}

export default Practice;