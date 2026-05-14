### FRONTEND
    Dynamic, responsive User Interface(UI === webpage ----> browser)
                               HTML
                               CSS(style as well as reponsiveness) , bootstrap/tailwand CSS (CSS frameworks)
                                |
    Website - static------------|
    Webapplication - dynamic----|
                                |
                               Javascript
                               ReactJS/Angular/Vue/Nextjs
   small and medium applications---|      |-----For large scale applications






# CSS


   ### PADDING

   MARGIN AND PADDING
   padding : _____________
   all sides (if 1 value given)
   tb lr     (if 2 values given)
   t lr b
   t r b l




  # box-sizing property helps us maintain the width of the element as we mentioned 
    - content-box : excludes border and padding
    - border-box : includes border and padding


# Wild character (*)
    - universal selector
    - applies the properties to each and every element
    - used as a reset
    - cancels the margin and padding of the user agent stylesheet of the browser
    - start with this in CSS file to avoid unwanted padding and borders


# width and max-width
    - width : is fixed
    - max-width : upto which extent width can be

    -height and max height can be used


# borders
    - by default, sharp borders
    - border-radius------>help us to get curved corner borders
    - eg = border-radius:10%


# styling the text
    - fonts
    - colors
        * RGB colours
            - eg: rgb(200, 120, 50)
        * hexadecimal colors
        * hsl colors
    - size (font-size)
    - font-family

# pseudo classes
    - deals with the state of an elements

    - hover
    - visited
    - focus
    - active
    -to style the childern especially in terms of list items
              - first-child
              - last-child
              - nth-child (nth-child(3))

# tables




# Font size units
    - pixel unit --> fixed (but dependent on screen resoluution)
    - % unit --> dependent on parent

    - in terms of font size if we use pixel units ---> it wont adjust according to the custom font settings of the browser
    - instead we can use   - em unit(font size of the parent element)
                                   or  
                           - rem unit(font size of root element)
                 ex : 10rem (10 X fontsize of root elemnt)
    - by using rem unit we can change the font size of the entire page just by changing the font of root element
    - among rem and em units rem unit is most flexible
    - em unit may not be useful when we use nested elements or nested documents


# view port units
    - the visible area on the browser is called viewport
    - it is not dependent on the root or parent

    - vw unit --> with respect to viewport width
    - vh unit --> with respect to viewport height




# Flex and grid
    - used to create layouts
# flex wrap
    - checks for sufficient space and puts all contents in the same line and pushes the last element to the next line when there is no sufficient  space


# Responsive web design
    - responisive text
    -    "        layouts
    -    "        images




# bootstrap and Tailwind CSS
    - frameworks in which predefined styles will be available
    - tailwind is huge when compared with bootstrap
    - so it is better to use tailwind css


