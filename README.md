# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. here i have use data json in which the may car data 
 2 and this data i have store in by the redux 
 3  and then i map the data in carPage component 
 

 4 For pagination i have use the length of the data devided by 6 

 5 And for search input i store the search value and the in redux i have use some logics to find only those title which is contain in data and the map this data in same carPage 

 6 In car page i have put some logic if we search data and we find data so its show only the search data and if the search data dont have any data so its by default shoe the original all data 