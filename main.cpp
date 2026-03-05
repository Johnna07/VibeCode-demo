#include <cstdlib>
#include <ctime>

// simple rock paper scissors logic
// userChoice: 0=rock,1=paper,2=scissors
// returns packed value: (computerChoice<<2) | result
// result: 0=lose,1=draw,2=win

extern "C" {
    int play(int userChoice) {
        if (userChoice < 0 || userChoice > 2) return -1;
        // seed once
        static bool seeded = false;
        if (!seeded) {
            std::srand(static_cast<unsigned>(std::time(nullptr)));
            seeded = true;
        }
        int comp = std::rand() % 3;
        int result;
        if (userChoice == comp) {
            result = 1; // draw
        } else if ((userChoice + 1) % 3 == comp) {
            result = 0; // user loses
        } else {
            result = 2; // user wins
        }
        return (comp << 2) | result;
    }
}