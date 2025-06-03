# Higher Education Students Performance Evaluation - Web App

Esta aplicación web interactiva permite cargar y explorar el dataset “Higher Education Students Performance Evaluation” de manera visual y dinámica. Incluye filtros avanzados, gráficos actualizables y una interfaz amigable para el análisis de datos educativos.

---

## ¿Cómo usar la aplicación?

1. **Carga automática del dataset:**  
    Al abrir la aplicación, el dataset se carga y mapea automáticamente.

2. **Aplicar filtros:**  
    Utiliza los controles del panel lateral para seleccionar valores en los dropdowns, checkboxes, sliders y selectores. Puedes combinar varios filtros para explorar diferentes segmentos del dataset.

3. **Visualización dinámica:**  
    Los gráficos se actualizan instantáneamente cada vez que cambias un filtro, mostrando los datos correspondientes a tu selección.

4. **Restablecer filtros:**  
    Si deseas volver a ver el dataset completo, haz clic en el botón “Reset filtros” para limpiar todas las selecciones y restaurar los gráficos a su estado inicial.

5. **Explora y analiza:**  
    Usa los tooltips y la interactividad de los gráficos para obtener información detallada sobre los datos filtrados.
---

## Descripción del Prompt
IA Elegida: GitHub Copilot

El desarrollo inicial de esta aplicación se basó en el siguiente prompt:

"Quiero una aplicación web interactiva en html, css y js que cargue y explore el dataset “Higher Education Students Performance Evaluation” (CSV) con este formato de columnas:
• STUDENT ID
• 1, 2, …, 30  ← corresponden a 30 variables de Features
• COURSE ID
• GRADE (0=Fail,1=DD,2=DC,…,7=AA)
1. Lectura y etiquetado de variables
	•	Importar el CSV desde /data/data.csv.
	•	Renombrar las columnas “1”→“Student Age”, “2”→“Sex”, …, “30”→“Taking notes in classes” según la tabla de mapeo.
	•	Convertir cada código numérico en su etiqueta legible (p. ej. Student Age: 1→“18–21”, etc.).
	•	Tratar valores faltantes (ninguno en este dataset).
2. Filtros interactivos
	•	Dropdown múltiples para cada variable categórica (Student Age, Sex, Graduated high-school type, Scholarship type, …, Flip-classroom, Expected CGPA).
	•	Checkboxes para binarias: Additional work, Artistic/Sports activity, Partner, Seminar attendance.
	•	Slider para “Number of sisters/brothers” (1–5+).
	•	Selector para “Course ID” (lista de cursos disponibles).
	•	Multi-select para “GRADE” (0–7) como variable objetivo.
3. Gráficos dinámicos
a. Distribución de GRADE: bar chart que muestre la proporción de cada grado, filtrable por cualquier Feature.
b. Box plot: distribución de “Expected CGPA” por nivel de “Mother’s education” o “Father’s education”.
c. Heatmap de correlaciones: entre todas las variables ordinales codificadas numéricamente (Age, Study hours, CGPAs, etc.).
d. Scatter Matrix: pares de variables seleccionadas (Income vs. Study hours vs. Attendance) con tooltips.
e. Gráfico de barras apiladas: frecuencia de “Reading frequency (scientific)” por “Sex” y “Scholarship type”.
4. Interactividad y UX
	•	Cada vez que cambie un filtro, todos los gráficos se actualizan al instante.
	•	Tooltips con valor exacto al pasar el ratón.
	•	Botón “Reset filtros” para volver al dataset completo.
	•	Panel lateral plegable con controles, y área principal para gráficos.
5. Tecnologías y estilo
Por favor, genera todo el código fuente necesario (archivos .js, .html, .css) y comentarios explicativos para que el equipo solo tenga que añadir el CSV y levantar la aplicación.
6. Documentación integrada
Comentarios en el código"

Luego se fueron agregando cosas de manera in-Chat por medio de GitHub Copilot
---

## Funcionalidades

- **Carga y mapeo automático del CSV**:  
  Renombra columnas y convierte códigos numéricos a etiquetas legibles según la tabla de mapeo.

- **Filtros interactivos**:  
  - Dropdowns múltiples para variables categóricas.
  - Checkboxes para variables binarias.
  - Slider para “Number of sisters/brothers”.
  - Selector para “Course ID”.
  - Multi-select para “GRADE”.

- **Gráficos dinámicos**:  
  - Distribución de GRADE (bar chart)
  - Box plot de Expected CGPA por educación de padres
  - Heatmap de correlaciones entre variables ordinales
  - Scatter Matrix de variables seleccionadas
  - Barras apiladas de “Reading frequency (scientific)” por “Sex” y “Scholarship type”
  - Otros más

- **Interactividad y UX**:  
  - Actualización instantánea de gráficos al cambiar filtros
  - Tooltips con valores exactos
  - Botón “Reset filtros”
  - Panel lateral plegable para controles

---

## Estructura del Código

- **index.html**  
  Estructura básica, panel de filtros, área de gráficos, incluye scripts y estilos.

- **style.css**  
  Estilos para el layout, panel lateral, responsividad y gráficos.

- **script.js**  
  Lógica de carga, mapeo, filtrado y renderizado de gráficos.  
  Incluye comentarios explicativos y funciones de mapeo para cada variable.

---

## Integrantes
Isaac David Sánchez Sánchez – T00067613,
Luis Mario Diaz Martinez – T00069220,
Maria Valentina Serna Gonzalez – T00067756.

---

## Notas

- El dataset no contiene valores faltantes.
- El código está documentado y listo para ser extendido.
- Para dudas o mejoras, contacta al equipo.
---