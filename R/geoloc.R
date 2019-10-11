#' Geolocation at launch
#'
#' @return The user geolocation
#' @export
#'
#' @examples
#'
#' library(shiny)
#' ui <- fluidPage(
#'   onload_geoloc()
#' )
#'
#' @importFrom shiny tagList includeScript

onload_geoloc <- function(){
  tagList(
    includeScript(
      system.file(
        "js/onstart.js",
        package = "geoloc"
      )
    ),
    includeScript(
      system.file(
        "js/geoloc.js",
        package = "geoloc"
      )
    )
  )
}

#' Geolocation button
#'
#' @inheritParams shiny::actionButton
#'
#' @return The user geolocation
#' @export
#'
#' @examples
#' library(shiny)
#' ui <- fluidPage(
#'   button_geoloc("foo", "bar")
#' )
#'
#'
#' @importFrom shiny tagList includeScript tagAppendAttributes actionButton

button_geoloc <- function(inputId, label, icon = NULL, width = NULL, ...){
  func <- paste0("getLocation(\"", inputId, "\")")
  tagList(
    includeScript(
      system.file(
        "js/geoloc.js",
        package = "geoloc"
      )
    ),
    tagAppendAttributes(
      actionButton(inputId, label, icon = icon, width = width, ...),
      onclick = func
    )
  )

}
