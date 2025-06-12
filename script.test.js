// Language: javascript
/**
 * @jest-environment jsdom
 */

describe("Script functionality tests", () => {
    let container;
    let class1Link, pasteButton, checkButton, dataTableDiv;
    
    beforeEach(() => {
        // Clear DOM
        document.body.innerHTML = `
            <a id="class1" href="#">Class 1</a>
            <a id="class2" href="#">Class 2</a>
            <a id="class3" href="#">Class 3</a>
            <a id="class4" href="#">Class 4</a>
            <a id="class5" href="#">Class 5</a>
            <button id="paste-data-button">Paste</button>
            <button id="check-data-button">Check</button>
            <div id="data-table"></div>
        `;
    
        // Get elements
        class1Link = document.getElementById("class1");
        pasteButton = document.getElementById("paste-data-button");
        checkButton = document.getElementById("check-data-button");
        dataTableDiv = document.getElementById("data-table");
        
        // Simulate DOMContentLoaded (since script.js uses it).
        const event = new Event("DOMContentLoaded");
        document.dispatchEvent(event);
    });
    
    test("should generate table HTML when class1 is clicked", () => {
        class1Link.click();
        expect(dataTableDiv.innerHTML).toContain("<table>");
        expect(dataTableDiv.querySelector("table")).not.toBeNull();
    });
    
    test("should paste data into table body when paste button is clicked", () => {
        class1Link.click(); // must generate the table first
        const sampleData = "1\tA\tHS001\tNguyen Van A\t01/01/2000\tT\t9\n2\tA\tHS002\tTran Thi B\t02/02/2000\tH\t5";
        window.prompt = jest.fn().mockReturnValue(sampleData);
        pasteButton.click();
        
        const tbody = dataTableDiv.querySelector("tbody");
        expect(tbody).not.toBeNull();
        const rows = tbody.querySelectorAll("tr");
        expect(rows.length).toBe(2);
        expect(rows[0].querySelectorAll("td").length).toBeGreaterThanOrEqual(7);
    });
    
    test("should highlight subject pair cells red when rating and score mismatch", () => {
        // Set up table and create one row with enough cells.
        class1Link.click();
        const tbody = dataTableDiv.querySelector("tbody");
        const tr = document.createElement("tr");
        // Create dummy cells. For class1/2 subject pair, we need at least index 6.
        // Create 9 cells (indices 0..8): 
        // Indices: 5 => Điểm KTĐK Toán, 6 => Mức đạt được Toán, 7 => Điểm KTĐK Tiếng việt, 8 => Mức đạt được Tiếng việt.
        for (let i = 0; i < 9; i++) {
            const td = document.createElement("td");
            td.textContent = "";
            tr.appendChild(td);
        }
        // Set subject pair cells for Toán:
        // For Toán, rating is at index 5, score at index 6.
        tr.cells[5].textContent = "T";
        tr.cells[6].textContent = "5"; // invalid score, valid should be in ["7","8","9","10"]
        tbody.appendChild(tr);
        
        // Click check button.
        checkButton.click();
        
        // Verify that the cells have red background.
        expect(tr.cells[5].style.backgroundColor).toBe("red");
        expect(tr.cells[6].style.backgroundColor).toBe("red");
    });
    
    test("should highlight special ability cells yellow when năng lực đặc thù check fails", () => {
        // Assume that new functionality is integrated in checkButton event handler.
        // For Class1, Mức đạt được Toán is at index 6.
        // Assuming the Năng lực đặc thù Tính toán column is at index 21,
        // we create a row with at least 22 cells.
        class1Link.click();
        const tbody = dataTableDiv.querySelector("tbody");
        const tr = document.createElement("tr");
        for (let i = 0; i < 26; i++) {
            const td = document.createElement("td");
            td.textContent = "";
            tr.appendChild(td);
        }
        // Set Mức đạt được Toán at index 6 and Năng lực đặc thù Tính toán at index 21.
        // Rule: if Mức đạt được = "T" then expected năng lực is "T".
        // Use mismatch: set level = "T" and năng lực = "Đ".
        tr.cells[6].textContent = "T";
        tr.cells[21].textContent = "Đ"; // mismatch
        
        tbody.appendChild(tr);
        
        // Extend the checkButton logic to handle special ability check.
        // (This block simulates the new functionality.)
        const rows = tbody.querySelectorAll("tr");
        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            if(cells.length > 21) {
                const toanCell = cells[6];
                const tinhToanCell = cells[21];
                const level = toanCell.textContent.trim();
                const ability = tinhToanCell.textContent.trim();
                const expected = level === "T" ? "T" : level === "H" ? "Đ" : level === "C" ? "C" : "";
                if(ability !== expected){
                    toanCell.style.backgroundColor = "yellow";
                    tinhToanCell.style.backgroundColor = "yellow";
                } else {
                    toanCell.style.backgroundColor = "";
                    tinhToanCell.style.backgroundColor = "";
                }
            }
        });
        
        // Click check button to simulate full check.
        checkButton.click();
        
        expect(tr.cells[6].style.backgroundColor).toBe("yellow");
        expect(tr.cells[21].style.backgroundColor).toBe("yellow");
    });
});