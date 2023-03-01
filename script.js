$(document).ready(function () {

    // variables to initialize when page loads
    const currentDay = $("#currentDay");
    // empty array for individual events by hour of day
    //let storedEvent_ = [];
    // get element by ID -- save buttons and text boxes
    const saveBtn = $(".saveBtn");
    //const description = $(".description");
    // assigning variable name to calendar rows
    const row = $(".row");
  
    let hour24 = "";
  
    //let globalRow = [];
  
    /*const hour9 = $("#hour-9");
    const hour10 = $("#hour-10");
    const hour11 = $("#hour-11");
    const hour12 = $("#hour-12");
    const hour13 = $("#hour-13");
    const hour14 = $("#hour-14");
    const hour15 = $("#hour-15");
    const hour16 = $("#hour-16");
    const hour17 = $("#hour-17");*/
  
    /*const row = {
      $("#hour-9"): 9,
        $("#hour-10"): 10,
          $("#hour-11"): 11,
            $("#hour-12"): 12,
              $(#hour - 13): 13,
                $(#hour - 14): 14,
                  $(#hour - 15): 15,
                    $(#hour - 16): 16,
                      $(#hour - 17): 17 
    }*/
    // creating an oject
  
    const compareHours = {
      hour: 9,
      hour: 10,
      hour: 11,
      hour: 12,
      hour: 13,
      hour: 14,
      hour: 15,
      hour: 16,
      hour: 17
    }
  
    // set the current time/day/month at top of the page
    function currentTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      currentDay.text(rightNow);
    }
  
  
  
    // function to capture value of text box and place in local storage
    saveBtn.click(function () {
      // captures value from text field
      const descriptionValue = $(this).siblings('.description').val(); //text box value
      console.log("1st this:", $(this));
      console.log("1st this sibling:", $(this.siblings));
      /* $(this) is getting the value for the particular button element of .row, allowing sorting from all of the .row buttons available */
      // searches for unique id from all in the .row class
      const rowId = $(this).parent().attr('id');
      console.log("2nd this:", $(this));
      console.log("2nd this parent:", $(this).parent);
      // concatenate id to row for keying into local storage
  
      // save into local storage
      localStorage.setItem(rowId, descriptionValue);
      //globalRow = rowId;
      //console.log("gR1:", globalRow);
    })
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes?
  
    // logs the current hour as a single digit for comparison to calendar row
    // to be used as reference point when determining the proper color of row item
    function format24() {
      hour24 = dayjs().format("H");
      console.log("24 hour time:", hour24);
    }
  
    // early non-functional frame work of comparison module for row colors
    function pastPresentFuture() {
  
      // gather all ids into an array
      function getRowIdsByClass(row) {
        const allIds = [];
        $(row).each(function () {
          const id = $(this).attr("id");
  
          if (id && !allIds.includes(id)) {
            allIds.push(id);
          }
        })
        return allIds;
      }
      const allRowIds = getRowIdsByClass(row);
  
      console.log("rowId", allRowIds);
  
      //let compare = 0;
  
      //while (compare < allRowIds.length) {
      for (let i = 0; i < allRowIds.length; i += 1) {
        if (hour24 !== allRowIds[i]) {
          if (hour24 < allRowIds[i]) {
            $(row).addClass("#past");
          } else if (hour24 > allRowIds[i]) {
            $(row).addClass("#future");
          } else {
            $(row).addClass("#present")
          };
        }
      }
      // compare++
      //}
  
      //look at the value of each id associated with a particular time block
  
      //compare that value with the current value of hour24
  
      //if less than hour24, assign "past"
      //if equal to hour24, assign "present"
      //if greater than hour24, assign "future"
      /*for (let key in value) {
        if (compareHours.value[key] < hour24) {
          someThing = #past; //toggle css style
        } else if (compareHours.value[key] == hour24) {
          someThing = #present;
        } else {
          someThing = #future;
        }
      }*/
    }
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  
    currentTime();
    setInterval(currentTime, 1000);
    format24();
    pastPresentFuture()
  });