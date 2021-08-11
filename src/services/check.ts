

export class Check {
    //     strmatch static  ( str: String , pattern: String ,  int n, int m) : boolean
    //   { 
    //     if (m == 0) 
    //       return (n == 0); 
    //     boolean[][] lookup = new boolean[n + 1][m + 1]; 
    //     for(int i = 0; i < n + 1; i++) 
    //       Arrays.fill(lookup[i], false); 
    //     lookup[0][0] = true; 
    //     for (int j = 1; j <= m; j++) 
    //       if (pattern.charAt(j - 1) == '*') 
    //         lookup[0][j] = lookup[0][j - 1]; 
    //     for (int i = 1; i <= n; i++) 
    //     { 
    //       for (int j = 1; j <= m; j++) 
    //       { 
    //         if (pattern.charAt(j - 1) == '*') 
    //           lookup[i][j] = lookup[i][j - 1] || 
    //                 lookup[i - 1][j]; 
    //         else if (pattern.charAt(j - 1) == '?' || 
    //           str.charAt(i - 1) == pattern.charAt(j - 1)) 
    //           lookup[i][j] = lookup[i - 1][j - 1]; 
    //         else lookup[i][j] = false; 
    //       } 
    //     } 

    //     return lookup[n][m]; 
    //   } 

    //   public static void main(String args[]) 
    //   { 
    //     String str = "xyyyxyx"; 
    //     String pattern = "xy*y?"; 
    //     if (strmatch(str, pattern, str.length(), 
    //               pattern.length())) 
    //       System.out.println("Yes"); 
    //     else
    //       System.out.println("No"); 

    //   } 

    public static compare(title: String, ref: String): boolean {
        // return (title==ref);
        if (title == null || ref == null) return false;
        if (title.length == 0 || ref.length == 0) return false;

        title = this.deleteUnUsedChars(title);
        console.log(title);

        ref = this.deleteUnUsedChars(ref);
        console.log(ref);
        return (title == ref);
        // if(title==ref) return true;

    }

    private static deleteUnUsedChars(str: String) {
        let middleChars = ['_', '#', 'בסעיף', '-', 'לסעיף', 'סעיף', 'חוק', 'בסעיפים', 'הסעיפים', 'בחוק', 'הסעיף'];
        middleChars.forEach(char => {
            str = str.replace(char, " ")
        });

        let tempStr = str.substr(str.indexOf(")"), str.indexOf("("));
        str = str.replace(tempStr, "");
        //delete un used space
        str = str.trim();
        return str;
    }

}