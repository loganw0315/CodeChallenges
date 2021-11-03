const hasBalancedParens = string => {
    openCount = (string.split('(').length-1)
    closedCount = (string.split(')').length-1)
    return openCount === closedCount
}



