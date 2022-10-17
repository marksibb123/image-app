# Simplified Image App

This application was intended to make drawing/painting easier by making complex reference images simple.

To get the desired result, a React application is used to fetch the desired image from Pexels API, and a Python script using various image filtering methods. 

This produces an image that converts complex gradients of tones into simple blocks of tones.

Images can be fetched through the app from 'Pexels' database.

### The issue
As nice as the above sounds, I was not being able to integrate the script with the React application. 

The script works as planned with image hardcoded in, while running a Jupyter Notebook. 

And the React app fetches and selects the desired image, but using the desired image in the Python script within the browser was not possible in the time frame.

My desired apporach would be to create a Flask API to perform this integration, although time contraints prevented this.

### To start React
To start the React application: run `npm i` followed by `npm start` in the projects directory.

### To start Jupyter (if this is of any interest)
If you want to run the Python script locally, this can be started running `jupyter-notebook` in the projects directory (will need to install Jupyter to do this).

Upon running the the script, you will be prompted to install the imports if they are not already in your environment. 

This will be done using `pip install <package>`.

Comments have been added throughout the 'simplifyScript.ipynb' explaining the process used and a screen grab of the Python scripts output is integrated in the React application. 

### Open sourced tools used 
- Semantic UI React for the components 
- Jupyter Notebook for testing of the script
- Pexels API
