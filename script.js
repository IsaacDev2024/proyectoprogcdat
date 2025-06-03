// --- Mapeo de columnas del CSV a nombres descriptivos ---
const columnMap = [
  "Student ID",
  "Student Age",
  "Sex",
  "Graduated high-school type",
  "Scholarship type",
  "Additional work",
  "Regular artistic or sports activity",
  "Do you have a partner",
  "Total salary if available",
  "Transportation to the university",
  "Accomodation type in Cyprus",
  "Mother's education",
  "Father's education",
  "Number of sisters/brothers (if available)",
  "Parental status",
  "Mother's occupation",
  "Father's occupation",
  "Weekly study hours",
  "Reading frequency (non-scientific books/journals)",
  "Reading frequency (scientific books/journals)",
  "Attendance to the seminars/conferences related to the department",
  "Impact of your projects/activities on your success",
  "Attendance to classes",
  "Preparation to midterm exams 1",
  "Preparation to midterm exams 2",
  "Taking notes in classes",
  "Listening in classes",
  "Discussion improves my interest and success in the course",
  "Flip-classroom",
  "Cumulative grade point average in the last semester (/4.00)",
  "Expected Cumulative grade point average in the graduation (/4.00)",
  "Course ID",
  "OUTPUT Grade"
];

// --- Configuración de variables y mapeos para filtros ---
const categoricalVars = [
  "Student Age", "Sex", "Graduated high-school type", "Scholarship type",
  "Transportation to the university", "Accomodation type in Cyprus",
  "Mother's education", "Father's education", "Parental status",
  "Mother's occupation", "Father's occupation", "Weekly study hours",
  "Reading frequency (non-scientific books/journals)",
  "Reading frequency (scientific books/journals)",
  "Impact of your projects/activities on your success",
  "Attendance to classes", "Preparation to midterm exams 1",
  "Preparation to midterm exams 2", "Taking notes in classes",
  "Listening in classes", "Discussion improves my interest and success in the course",
  "Flip-classroom", "Cumulative grade point average in the last semester (/4.00)",
  "Expected Cumulative grade point average in the graduation (/4.00)"
];
const binaryVars = [
  "Additional work", "Regular artistic or sports activity",
  "Do you have a partner", "Attendance to the seminars/conferences related to the department"
];
const sliderVars = ["Number of sisters/brothers (if available)"];
const courseIdVar = "Course ID";
const gradeVar = "OUTPUT Grade";


const valueMeanings = {
  "Student Age": {
    "1": "18-21", "2": "22-25", "3": "above 26"
  },
  "Sex": {
    "1": "female", "2": "male"
  },
  "Graduated high-school type": {
    "1": "private", "2": "state", "3": "other"
  },
  "Scholarship type": {
    "1": "None", "2": "25%", "3": "50%", "4": "75%", "5": "Full"
  },
  "Additional work": {
    "1": "Yes", "2": "No"
  },
  "Regular artistic or sports activity": {
    "1": "Yes", "2": "No"
  },
  "Do you have a partner": {
    "1": "Yes", "2": "No"
  },
  "Total salary if available": {
    "1": "USD 135-200", "2": "USD 201-270", "3": "USD 271-340", "4": "USD 341-410", "5": "above 410"
  },
  "Transportation to the university": {
    "1": "Bus", "2": "Private car/taxi", "3": "bicycle", "4": "Other"
  },
  "Accomodation type in Cyprus": {
    "1": "rental", "2": "dormitory", "3": "with family", "4": "Other"
  },
  "Mother's education": {
    "1": "primary school", "2": "secondary school", "3": "high school", "4": "university", "5": "MSc.", "6": "Ph.D."
  },
  "Father's education": {
    "1": "primary school", "2": "secondary school", "3": "high school", "4": "university", "5": "MSc.", "6": "Ph.D."
  },
  "Number of sisters/brothers (if available)": {
    "1": "1", "2": "2", "3": "3", "4": "4", "5": "5 or above"
  },
  "Parental status": {
    "1": "married", "2": "divorced", "3": "died - one of them or both"
  },
  "Mother's occupation": {
    "1": "retired", "2": "housewife", "3": "government officer", "4": "private sector employee", "5": "self-employment", "6": "other"
  },
  "Father's occupation": {
    "1": "retired", "2": "housewife", "3": "government officer", "4": "private sector employee", "5": "self-employment", "6": "other"
  },
  "Weekly study hours": {
    "1": "None", "2": "<5 hours", "3": "6-10 hours", "4": "11-20 hours", "5": "more than 20 hours"
  },
  "Reading frequency (non-scientific books/journals)": {
    "1": "None", "2": "Sometimes", "3": "Often"
  },
  "Reading frequency (scientific books/journals)": {
    "1": "None", "2": "Sometimes", "3": "Often"
  },
  "Attendance to the seminars/conferences related to the department": {
    "1": "Yes", "2": "No"
  },
  "Impact of your projects/activities on your success": {
    "1": "positive", "2": "negative", "3": "neutral"
  },
  "Attendance to classes": {
    "1": "always", "2": "sometimes", "3": "never"
  },
  "Preparation to midterm exams 1": {
    "1": "alone", "2": "with friends", "3": "not applicable"
  },
  "Preparation to midterm exams 2": {
    "1": "closest date to the exam", "2": "regularly during the semester", "3": "never"
  },
  "Taking notes in classes": {
    "1": "never", "2": "sometimes", "3": "always"
  },
  "Listening in classes": {
    "1": "never", "2": "sometimes", "3": "always"
  },
  "Discussion improves my interest and success in the course": {
    "1": "never", "2": "sometimes", "3": "always"
  },
  "Flip-classroom": {
    "1": "not useful", "2": "useful", "3": "not applicable"
  },
  "Cumulative grade point average in the last semester (/4.00)": {
    "1": "<2.00", "2": "2.00-2.49", "3": "2.50-2.99", "4": "3.00-3.49", "5": "above 3.49"
  },
  "Expected Cumulative grade point average in the graduation (/4.00)": {
    "1": "<2.00", "2": "2.00-2.49", "3": "2.50-2.99", "4": "3.00-3.49", "5": "above 3.49"
  },
  "OUTPUT Grade": {
    "0": "Fail", "1": "DD", "2": "DC", "3": "CC", "4": "CB", "5": "BB", "6": "BA", "7": "AA"
  }
};

// --- Estado global de filtros ---
let filters = {};

// --- Cargar datos y preparar filtros ---
let rawData = [];
let filteredData = [];

// Cargar y transformar datos
d3.csv("data.csv").then(data => {
  // Mapeo de cada fila a nombres descriptivos
  rawData = data.map(row => {
    let newRow = {};
    columnMap.forEach((colName, idx) => {
      let key;
      if (idx === 0) key = "STUDENT ID";
      else if (idx === 31) key = "COURSE ID";
      else if (idx === 32) key = "GRADE";
      else key = String(idx);
      newRow[colName] = row[key];
    });
    return newRow;
  });
  filteredData = rawData;
  initFilters();
  updateAllCharts();
});

// --- Inicialización de filtros interactivos ---
function initFilters() {
  const filtersDiv = document.getElementById("filters");
  filtersDiv.innerHTML = "";

  // Dropdowns para categóricas
  categoricalVars.forEach(varName => {
    const values = Array.from(new Set(rawData.map(d => d[varName]))).sort();
    // Mostrar etiquetas descriptivas pero usar valores internos numéricos
    const options = values.map(v => ({
      value: v,
      label: valueMeanings[varName]?.[v] ?? v
    }));
    createDropdownWithLabels(varName, options, filtersDiv);
  });
  // Checkboxes para binarias
  binaryVars.forEach(varName => {
    createCheckboxWithLabels(varName, filtersDiv);
  });
  // Slider para hermanos
  createSliderWithLabels(sliderVars[0], 1, 5, filtersDiv);
  // Selector para Course ID
  const courseIds = Array.from(new Set(rawData.map(d => d[courseIdVar]))).sort();
  const courseOptions = courseIds.map(v => ({ value: v, label: v }));
  createDropdownWithLabels(courseIdVar, courseOptions, filtersDiv);
  // Multi-select para GRADE
  const grades = Array.from(new Set(rawData.map(d => d[gradeVar]))).sort();
  const gradeOptions = grades.map(v => ({
    value: v,
    label: valueMeanings[gradeVar]?.[v] ?? v
  }));
  createMultiSelectWithLabels(gradeVar, gradeOptions, filtersDiv);
  // Botón reset ya está en el HTML
  document.getElementById("reset-btn").onclick = resetFilters;
}

// Nuevas funciones para mostrar etiquetas descriptivas pero usar valores internos
function createDropdownWithLabels(varName, options, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const select = document.createElement("select");
  select.id = `filter-${varName}`;
  select.multiple = true;
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });
  select.onchange = onFilterChange;
  parent.appendChild(label);
  parent.appendChild(select);
}

function createMultiSelectWithLabels(varName, options, parent) {
  // Igual que createDropdownWithLabels pero semánticamente separado
  createDropdownWithLabels(varName, options, parent);
}

function createCheckboxWithLabels(varName, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const yes = document.createElement("input");
  yes.type = "checkbox";
  yes.id = `filter-${varName}-1`;
  yes.value = "1";
  yes.onchange = onFilterChange;
  const no = document.createElement("input");
  no.type = "checkbox";
  no.id = `filter-${varName}-2`;
  no.value = "2";
  no.onchange = onFilterChange;
  label.appendChild(document.createTextNode(" " + (valueMeanings[varName]?.["1"] ?? "Sí") + " "));
  label.appendChild(yes);
  label.appendChild(document.createTextNode(" " + (valueMeanings[varName]?.["2"] ?? "No") + " "));
  label.appendChild(no);
  parent.appendChild(label);
}

function createSliderWithLabels(varName, min, max, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const input = document.createElement("input");
  input.type = "range";
  input.id = `filter-${varName}`;
  input.min = min;
  input.max = max;
  input.value = min;
  input.oninput = function() {
    const valLabel = valueMeanings[varName]?.[input.value] ?? input.value;
    document.getElementById(`slider-value-${varName}`).textContent = valLabel;
    onFilterChange();
  };
  const valueSpan = document.createElement("span");
  valueSpan.id = `slider-value-${varName}`;
  valueSpan.textContent = valueMeanings[varName]?.[min] ?? min;
  parent.appendChild(label);
  parent.appendChild(input);
  parent.appendChild(valueSpan);
}

// --- Creación de controles dinámicos ---
function createDropdown(varName, values, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const select = document.createElement("select");
  select.id = `filter-${varName}`;
  select.multiple = true;
  values.forEach(v => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
  select.onchange = onFilterChange;
  parent.appendChild(label);
  parent.appendChild(select);
}

function createCheckbox(varName, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const yes = document.createElement("input");
  yes.type = "checkbox";
  yes.id = `filter-${varName}-1`;
  yes.value = "1";
  yes.onchange = onFilterChange;
  const no = document.createElement("input");
  no.type = "checkbox";
  no.id = `filter-${varName}-2`;
  no.value = "2";
  no.onchange = onFilterChange;
  label.appendChild(document.createTextNode(" Sí "));
  label.appendChild(yes);
  label.appendChild(document.createTextNode(" No "));
  label.appendChild(no);
  parent.appendChild(label);
}

function createSlider(varName, min, max, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const input = document.createElement("input");
  input.type = "range";
  input.id = `filter-${varName}`;
  input.min = min;
  input.max = max;
  input.value = min;
  input.oninput = function() {
    document.getElementById(`slider-value-${varName}`).textContent = input.value;
    onFilterChange();
  };
  const valueSpan = document.createElement("span");
  valueSpan.id = `slider-value-${varName}`;
  valueSpan.textContent = min;
  parent.appendChild(label);
  parent.appendChild(input);
  parent.appendChild(valueSpan);
}

function createMultiSelect(varName, values, parent) {
  const label = document.createElement("label");
  label.textContent = varName;
  const select = document.createElement("select");
  select.id = `filter-${varName}`;
  select.multiple = true;
  values.forEach(v => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
  select.onchange = onFilterChange;
  parent.appendChild(label);
  parent.appendChild(select);
}

// --- Manejo de cambios de filtro ---
function onFilterChange() {
  // Leer todos los controles y actualizar filters{}
  filters = {};

  // Dropdowns y multi-selects
  [...categoricalVars, courseIdVar, gradeVar].forEach(varName => {
    const el = document.getElementById(`filter-${varName}`);
    if (el) {
      const selected = Array.from(el.selectedOptions).map(opt => opt.value);
      if (selected.length > 0) filters[varName] = selected;
    }
  });

  // Checkboxes binarias
  binaryVars.forEach(varName => {
    const yes = document.getElementById(`filter-${varName}-1`);
    const no = document.getElementById(`filter-${varName}-2`);
    let selected = [];
    if (yes && yes.checked) selected.push("1");
    if (no && no.checked) selected.push("2");
    if (selected.length > 0) filters[varName] = selected;
  });

  // Slider
  sliderVars.forEach(varName => {
    const el = document.getElementById(`filter-${varName}`);
    if (el) {
      filters[varName] = [el.value];
    }
  });

  applyFilters();
  updateAllCharts();
}

function computeCorrelationMatrix(matrix) {
    const n = matrix.length;
    const corr = [];
    for (let i = 0; i < n; i++) {
        corr[i] = [];
        for (let j = 0; j < n; j++) {
            corr[i][j] = pearson(matrix[i], matrix[j]);
        }
    }
    return corr;
}

function pearson(a, b) {
    const n = a.length;
    const meanA = d3.mean(a), meanB = d3.mean(b);
    let num = 0, denA = 0, denB = 0;
    for (let i = 0; i < n; i++) {
        num += (a[i] - meanA) * (b[i] - meanB);
        denA += (a[i] - meanA) ** 2;
        denB += (b[i] - meanB) ** 2;
    }
    return num / Math.sqrt(denA * denB);
}

function applyFilters() {
  filteredData = rawData.filter(row => {
    // Filtros de dropdown y multi-select
    for (let key in filters) {
      if (categoricalVars.includes(key) || key === courseIdVar || key === gradeVar) {
        if (filters[key] && !filters[key].includes(row[key])) return false;
      }
      // Binarias
      if (binaryVars.includes(key)) {
        if (filters[key] && !filters[key].includes(row[key])) return false;
      }
      // Slider
      if (sliderVars.includes(key)) {
        if (filters[key] && row[key] !== filters[key][0]) return false;
      }
    }
    return true;
  });
}

// --- Botón reset ---
function resetFilters() {
  filters = {};
  // Resetea todos los controles visuales
  document.querySelectorAll("#filters select").forEach(sel => sel.selectedIndex = -1);
  document.querySelectorAll("#filters input[type='checkbox']").forEach(cb => cb.checked = false);
  document.querySelectorAll("#filters input[type='range']").forEach(sl => {
    sl.value = sl.min;
    const span = document.getElementById(`slider-value-${sl.id.replace("filter-","")}`);
    if (span) span.textContent = sl.value;
  });
  filteredData = rawData;
  updateAllCharts();
}

/* --- Gráficos dinámicos --- */
function updateAllCharts() {
    drawGradeBarChart();
    drawExpectedCGPABoxPlot();
    drawCorrelationHeatmap();
    drawStackedBar();
    drawCGPABySchoolType();
    drawParentMaritalPie();
    drawStudyHoursCGPAScatter();
    drawScholarshipByGradeBar();
    drawAttendanceCGPA();
    drawCGPAExtracurricular();
    drawTransportPie();
    drawCGPASocioeconomic();
    drawAgeCGPA();
    drawCGPAViolinBySex();
    drawParallelCategories();
    drawPartnerPie();
    drawSeminarGradeHeatmap();
}

// a. Distribución de GRADE
function drawGradeBarChart() {
  const counts = d3.rollup(filteredData, v => v.length, d => d[gradeVar]);
  // Ordenar los grades de 0 a 7
  const grades = Array.from(counts.keys()).map(Number).sort((a, b) => a - b).map(String);
  const values = grades.map(g => counts.get(g) || 0);
  const labels = grades.map(g => valueMeanings[gradeVar]?.[g] ?? g);
  Plotly.newPlot('grade-bar', [{
    x: labels, y: values, type: 'bar', text: values, textposition: 'auto'
  }], {
    title: 'Distribución de GRADE',
    xaxis: { title: 'GRADE' },
    yaxis: { title: 'Cantidad' }
  });
}

// b. Box plot: Expected CGPA por Mother's/Father's education
function drawExpectedCGPABoxPlot() {
    const groupVar = document.getElementById('box-group-select').value || "Mother's education";
    const groups = Array.from(new Set(filteredData.map(d => d[groupVar])));
    const traces = groups.map(g => ({
        y: filteredData.filter(d => d[groupVar] === g).map(d => +d["Expected Cumulative grade point average in the graduation (/4.00)"]),
        name: valueMeanings[groupVar]?.[g] ?? g,
        type: 'box'
    }));
    Plotly.newPlot('cgpa-box', traces, {
        title: 'Expected CGPA por ' + groupVar,
        yaxis: { title: 'Expected CGPA' }
    });
}

// c. Heatmap de correlaciones (sin cambios, son numéricas)
function drawCorrelationHeatmap() {
    const numVars = [
        "Student Age", "Weekly study hours",
        "Cumulative grade point average in the last semester (/4.00)",
        "Expected Cumulative grade point average in the graduation (/4.00)",
        "Number of sisters/brothers (if available)",
        "Total salary if available"
    ];
    const matrix = numVars.map(v => filteredData.map(d => +d[v]));
    const corr = computeCorrelationMatrix(matrix);
    Plotly.newPlot('corr-heatmap', [{
        z: corr, x: numVars, y: numVars, type: 'heatmap', colorscale: 'Viridis'
    }], {
        title: 'Correlación entre variables ordinales'
    });
}
/**
 * j. Violin Plot: Distribución de CGPA por Sexo
 */
function drawCGPAViolinBySex() {
  const sexTypes = Array.from(new Set(filteredData.map(d => d["Sex"])));
  const traces = sexTypes.map(sex => ({
    y: filteredData.filter(d => d["Sex"] === sex).map(d => +d["Cumulative grade point average in the last semester (/4.00)"]),
    name: valueMeanings["Sex"]?.[sex] ?? sex,
    type: 'violin',
    box: { visible: true },
    meanline: { visible: true }
  }));
  Plotly.newPlot('cgpa-violin-sex', traces, {
    title: '', // El título está en el HTML
    yaxis: { title: 'CGPA Último Semestre' }
  });
}


/**
 * l. Parallel Categories: Relación entre Beca, Tipo de Escuela y GRADE
 */
function drawParallelCategories() {
  const dimensions = [
    {
      label: "Scholarship",
      values: filteredData.map(d => valueMeanings["Scholarship type"]?.[d["Scholarship type"]] ?? d["Scholarship type"])
    },
    {
      label: "School Type",
      values: filteredData.map(d => valueMeanings["Graduated high-school type"]?.[d["Graduated high-school type"]] ?? d["Graduated high-school type"])
    },
    {
      label: "Grade",
      values: filteredData.map(d => valueMeanings[gradeVar]?.[d[gradeVar]] ?? d[gradeVar])
    }
  ];
  Plotly.newPlot('parallel-categories', [{
    type: 'parcats',
    dimensions: dimensions,
    line: { color: filteredData.map(d => +d[gradeVar]), colorscale: 'Viridis' }
  }], {
    title: '' // El título está en el HTML
  });
}

/**
 * m. Pie chart: Proporción de estudiantes con y sin pareja
 */
function drawPartnerPie() {
  const counts = d3.rollup(filteredData, v => v.length, d => d["Do you have a partner"]);
  const labels = Array.from(counts.keys()).map(
    k => valueMeanings["Do you have a partner"]?.[k] ?? k
  );
  const values = Array.from(counts.values());
  Plotly.newPlot('partner-pie', [{
    labels: labels,
    values: values,
    type: 'pie',
    textinfo: 'label+percent',
    insidetextorientation: 'radial'
  }], {
    title: 'Distribución de Estudiantes con y sin Pareja'
  });
}

/**
 * n. Heatmap: Asistencia a Seminarios vs. GRADE
 */
function drawSeminarGradeHeatmap() {
  const seminarLevels = Array.from(new Set(filteredData.map(d => d["Attendance to the seminars/conferences related to the department"])));
  const grades = Array.from(new Set(filteredData.map(d => d[gradeVar])));
  const z = seminarLevels.map(seminar =>
    grades.map(grade =>
      filteredData.filter(d =>
        d["Attendance to the seminars/conferences related to the department"] === seminar &&
        d[gradeVar] === grade
      ).length
    )
  );
  Plotly.newPlot('seminar-grade-heatmap', [{
    z: z,
    x: grades.map(g => valueMeanings[gradeVar]?.[g] ?? g),
    y: seminarLevels.map(s => valueMeanings["Attendance to the seminars/conferences related to the department"]?.[s] ?? s),
    type: 'heatmap',
    colorscale: 'Blues'
  }], {
    title: '', // El título está en el HTML
    xaxis: { title: 'GRADE' },
    yaxis: { title: 'Asistencia a Seminarios' }
  });
}

// e. Barras apiladas: Reading frequency (scientific) por Sex y Scholarship type
function drawStackedBar() {
  const sexTypes = Array.from(new Set(filteredData.map(d => d["Sex"]))).sort((a, b) => +a - +b);

  // Asegura que el valor "5" (Full/100%) siempre esté presente y ordenado
  let scholarshipTypes = Array.from(new Set(filteredData.map(d => d["Scholarship type"])));
  if (!scholarshipTypes.includes("5")) scholarshipTypes.push("5");
  scholarshipTypes = scholarshipTypes.sort((a, b) => +a - +b);

  const readingLevels = Array.from(new Set(filteredData.map(d => d["Reading frequency (scientific books/journals)"]))).sort((a, b) => +a - +b);

  const traces = readingLevels.map(level => ({
    name: valueMeanings["Reading frequency (scientific books/journals)"]?.[level] ?? level,
    x: [],
    y: [],
    type: 'bar'
  }));

  sexTypes.forEach(sex => {
    scholarshipTypes.forEach(sch => {
      const group = filteredData.filter(d => d["Sex"] === sex && d["Scholarship type"] === sch);
      readingLevels.forEach((level, i) => {
        traces[i].x.push(
          (valueMeanings["Sex"]?.[sex] ?? sex) + "-" + (valueMeanings["Scholarship type"]?.[sch] ?? sch)
        );
        traces[i].y.push(group.filter(d => d["Reading frequency (scientific books/journals)"] === level).length);
      });
    });
  });

  Plotly.newPlot('stacked-bar', traces, {
    barmode: 'stack',
    title: 'Frecuencia de lectura científica por Sexo y Beca',
    xaxis: { title: 'Sexo - Beca' },
    yaxis: { title: 'Cantidad' }
  });
}

// f. Promedio de CGPA por Tipo de Escuela
function drawCGPABySchoolType() {
    const schoolTypes = Array.from(new Set(filteredData.map(d => d["Graduated high-school type"])));
    const means = schoolTypes.map(type => {
        const vals = filteredData.filter(d => d["Graduated high-school type"] === type)
            .map(d => +d["Cumulative grade point average in the last semester (/4.00)"])
            .filter(v => !isNaN(v));
        return vals.length ? d3.mean(vals) : 0;
    });
    Plotly.newPlot('cgpa-schooltype', [{
        x: schoolTypes.map(type => valueMeanings["Graduated high-school type"]?.[type] ?? type),
        y: means,
        type: 'bar',
        text: means.map(m => m.toFixed(2)),
        textposition: 'auto'
    }], {
        title: 'Promedio de CGPA por Tipo de Escuela',
        xaxis: { title: 'Tipo de Escuela' },
        yaxis: { title: 'Promedio CGPA' }
    });
}

// g. Distribución de Estudiantes por Estado Civil de los Padres
function drawParentMaritalPie() {
    const statusCounts = d3.rollup(filteredData, v => v.length, d => d["Parental status"]);
    const labels = Array.from(statusCounts.keys()).map(
        s => valueMeanings["Parental status"]?.[s] ?? s
    );
    const values = Array.from(statusCounts.values());
    Plotly.newPlot('parent-marital-pie', [{
        labels: labels,
        values: values,
        type: 'pie',
        textinfo: 'label+percent',
        insidetextorientation: 'radial'
    }], {
        title: 'Distribución de Estudiantes por Estado Civil de los Padres'
    });
}

// h. Relación entre Horas de Estudio y CGPA
function drawStudyHoursCGPAScatter() {
    const x = filteredData.map(d => valueMeanings["Weekly study hours"]?.[d["Weekly study hours"]] ?? d["Weekly study hours"]);
    const y = filteredData.map(d => +d["Cumulative grade point average in the last semester (/4.00)"]);
    Plotly.newPlot('studyhours-cgpa-scatter', [{
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        text: filteredData.map(d => valueMeanings[gradeVar]?.[d[gradeVar]] ?? d[gradeVar])
    }], {
        title: 'Relación entre Horas de Estudio y CGPA',
        xaxis: { title: 'Horas de Estudio Semanales' },
        yaxis: { title: 'CGPA Último Semestre' }
    });
}

// i. Beca por GRADE
function drawScholarshipByGradeBar() {
  // Asegura que el valor "5" (Full/100%) siempre esté presente en el eje x
  let scholarshipTypes = Array.from(new Set(filteredData.map(d => d["Scholarship type"])));
  if (!scholarshipTypes.includes("5")) scholarshipTypes.push("5");
  scholarshipTypes = scholarshipTypes.sort((a, b) => +a - +b);

  const grades = Array.from(new Set(filteredData.map(d => d[gradeVar])));
  const traces = grades.map(grade => ({
    name: valueMeanings[gradeVar]?.[grade] ?? grade,
    x: scholarshipTypes.map(sch => sch === "5" ? "100" : (valueMeanings["Scholarship type"]?.[sch] ?? sch)),
    y: scholarshipTypes.map(sch =>
      filteredData.filter(d => d["Scholarship type"] === sch && d[gradeVar] === grade).length
    ),
    type: 'bar'
  }));
  Plotly.newPlot('scholarship-grade-bar', traces, {
    barmode: 'group',
    title: 'Distribución de GRADE por Tipo de Beca',
    xaxis: { title: 'Tipo de Beca' },
    yaxis: { title: 'Cantidad' }
  });
}

function drawAttendanceCGPA() {
    const attendanceLevels = Array.from(new Set(filteredData.map(d => d["Attendance to classes"])));
    const means = attendanceLevels.map(level => {
        const vals = filteredData.filter(d => d["Attendance to classes"] === level)
            .map(d => +d["Cumulative grade point average in the last semester (/4.00)"])
            .filter(v => !isNaN(v));
        return vals.length ? d3.mean(vals) : 0;
    });
    Plotly.newPlot('attendance-cgpa', [{
        x: attendanceLevels.map(l => valueMeanings["Attendance to classes"]?.[l] ?? l),
        y: means,
        type: 'bar',
        text: means.map(m => m.toFixed(2)),
        textposition: 'auto'
    }], {
        title: 'Asistencia a Clases vs. CGPA',
        xaxis: { title: 'Asistencia a Clases' },
        yaxis: { title: 'Promedio CGPA' }
    });
}

function drawCGPAExtracurricular() {
    const activityVar = "Regular artistic or sports activity";
    const levels = Array.from(new Set(filteredData.map(d => d[activityVar])));
    const means = levels.map(level => {
        const vals = filteredData.filter(d => d[activityVar] === level)
            .map(d => +d["Cumulative grade point average in the last semester (/4.00)"])
            .filter(v => !isNaN(v));
        return vals.length ? d3.mean(vals) : 0;
    });
    Plotly.newPlot('cgpa-extracurricular', [{
        x: levels.map(l => valueMeanings[activityVar]?.[l] ?? l),
        y: means,
        type: 'bar',
        text: means.map(m => m.toFixed(2)),
        textposition: 'auto'
    }], {
        title: 'Promedio de CGPA por Actividad Extracurricular',
        xaxis: { title: 'Actividad Extracurricular' },
        yaxis: { title: 'Promedio CGPA' }
    });
}

function drawTransportPie() {
    const transportVar = "Transportation to the university";
    const counts = d3.rollup(filteredData, v => v.length, d => d[transportVar]);
    const labels = Array.from(counts.keys()).map(
        t => valueMeanings[transportVar]?.[t] ?? t
    );
    const values = Array.from(counts.values());
    Plotly.newPlot('transport-pie', [{
        labels: labels,
        values: values,
        type: 'pie',
        textinfo: 'label+percent',
        insidetextorientation: 'radial'
    }], {
        title: 'Distribución de Estudiantes por Medio de Transporte'
    });
}

function drawCGPASocioeconomic() {
    // Suponiendo que "Total salary if available" es un proxy de nivel socioeconómico
    const socioVar = "Total salary if available";
    const levels = Array.from(new Set(filteredData.map(d => d[socioVar])));
    const means = levels.map(level => {
        const vals = filteredData.filter(d => d[socioVar] === level)
            .map(d => +d["Cumulative grade point average in the last semester (/4.00)"])
            .filter(v => !isNaN(v));
        return vals.length ? d3.mean(vals) : 0;
    });
    Plotly.newPlot('cgpa-socioeconomic', [{
        x: levels.map(l => valueMeanings[socioVar]?.[l] ?? l),
        y: means,
        type: 'bar',
        text: means.map(m => m.toFixed(2)),
        textposition: 'auto'
    }], {
        title: 'Promedio de CGPA por Nivel Socioeconómico',
        xaxis: { title: 'Nivel Socioeconómico' },
        yaxis: { title: 'Promedio CGPA' }
    });
}

function drawAgeCGPA() {
    const ageVar = "Student Age";
    const levels = Array.from(new Set(filteredData.map(d => d[ageVar])));
    const means = levels.map(level => {
        const vals = filteredData.filter(d => d[ageVar] === level)
            .map(d => +d["Cumulative grade point average in the last semester (/4.00)"])
            .filter(v => !isNaN(v));
        return vals.length ? d3.mean(vals) : 0;
    });
    Plotly.newPlot('age-cgpa', [{
        x: levels.map(l => valueMeanings[ageVar]?.[l] ?? l),
        y: means,
        type: 'bar',
        text: means.map(m => m.toFixed(2)),
        textposition: 'auto'
    }], {
        title: 'Relación entre Edad y CGPA',
        xaxis: { title: 'Edad' },
        yaxis: { title: 'Promedio CGPA' }
    });
}

// --- Tooltips y UX extra ---
// Plotly ya incluye tooltips por defecto.
// El panel lateral y área de gráficos se definen en tu HTML/CSS.

// --- Actualizar boxplot al cambiar el select ---
document.getElementById('box-group-select').addEventListener('change', drawExpectedCGPABoxPlot);

function showLegend() {
  const panel = document.getElementById("legend-panel");
  panel.innerHTML = "<h3>Significado de los valores</h3>";
  for (const variable in valueMeanings) {
    panel.innerHTML += `<strong>${variable}</strong><ul>`;
    for (const code in valueMeanings[variable]) {
      panel.innerHTML += `<li><b>${code}:</b> ${valueMeanings[variable][code]}</li>`;
    }
    panel.innerHTML += "</ul>";
  }
}