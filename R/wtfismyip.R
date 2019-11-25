#' WTF is my IP
#'
#' @param safe wether or not to include the F words in result names
#'
#' @return a list with IP Address, Location, Hostname, ISP,
#'     TorExit, and Country code.
#' @export
wtfismyip <- function(
  safe = TRUE
){
  res <- jsonlite::fromJSON("https://wtfismyip.com/json")
  if (safe){
    names(res) <- gsub("Fucking", "_", names(res))
  }
  res
}
